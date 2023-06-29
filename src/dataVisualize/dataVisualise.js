import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { useDropzone } from "react-dropzone";
import "./dataVisualise.css";

const DataVisualise = () => {
  const [fileData, setFileData] = useState(null);
  const [sheet, setSheet] = useState(null);
  const [sheetcolumnNames, setSheetColumnNames] = useState(null);
  const [sheetcolumnData, setSheetColumnData] = useState([
    // { columnName: "", data: [] },
  ]);
  const [selectedColumnNames, setSelectedColumnNames] = useState([]);

  useEffect(() => {
    console.log(sheetcolumnNames);
    console.log("useEfffect", sheetcolumnData); // Access the updated sheetcolumnData

    // getColumnData(sheet);
  }, [sheetcolumnNames, sheetcolumnData]);

  /** Upload File */
  const handleFileUpload = (acceptedFiles) => {
    const file = acceptedFiles[0];

    const reader = new FileReader();
    reader.onload = (e) => {
      const workbook = XLSX.read(e.target.result, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
      console.log("workbook", workbook, +"" + "sheetName" + sheetName, sheet);
      setSheet(sheet);
      getColumnNames(sheet);
      setFileData(data);
    };

    reader.readAsBinaryString(file);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleFileUpload,
    accept: ".xlsx, .xls",
    multiple: false,
  });

  /** Load the Column Names in Excel Sheet */
  const getColumnNames = (sheet) => {
    const range = XLSX.utils.decode_range(sheet["!ref"]);
    const columnNames = [];

    for (let C = range.s.c; C <= range.e.c; ++C) {
      const cellAddress = XLSX.utils.encode_cell({ r: range.s.r, c: C });
      const cell = sheet[cellAddress];
      columnNames.push(cell.v);
    }

    setSheetColumnNames(columnNames);
    console.log(sheetcolumnNames);
    // getColumnData(sheet, "close ");
  };

  /** Load the Data from a Column in Excel Sheet */

  const getColumnData = async (sheet, columnName) => {
    setSelectedColumnNames((prevSelectedItems) => {
      if (prevSelectedItems.includes(columnName)) {
        return prevSelectedItems.filter((item) => item !== columnName);
      } else {
        return [...prevSelectedItems, columnName];
      }
    });
    const range = XLSX.utils.decode_range(sheet["!ref"]);
    const columnData = [];
    for (let C = range.s.c; C <= range.e.c; ++C) {
      const cellAddress = XLSX.utils.encode_cell({ r: range.s.r, c: C });
      const cell = sheet[cellAddress];
      // Check if the column name is "close"
      console.log(cell, columnName, cell.v);
      if (cell.v === columnName) {
        console.log("inisde if", cell.v);
        // Iterate through the rows of the column
        for (let R = range.s.r + 1; R <= range.e.r; ++R) {
          const cellAddress = XLSX.utils.encode_cell({ r: R, c: C });
          const cell = sheet[cellAddress];
          // console.log("inisde if", R, cellAddress, cell, cell.v);
          columnData.push(cell.v);
        }
        break; // Exit the loop once data is retrieved from the "close" column
      }
    }
    console.log("columnData", columnData);
    // setSheetColumnData({ columnName: columnName, data: columnData });
    await setSheetColumnData((prevData) => {
      const newData = [
        ...prevData,
        { columnName: columnName, data: columnData },
      ];
      const uniqueData = Array.from(
        new Set(newData.map(JSON.stringify)),
        JSON.parse
      );
      return uniqueData;
    });
    // console.log(sheetcolumnData);
  };

  return (
    <div className="excel-uploader">
      <div
        {...getRootProps()}
        className={`dropzone ${isDragActive ? "active" : ""}`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the Excel file here...</p>
        ) : (
          <p>Drag and drop an Excel file here, or click to select a file</p>
        )}
      </div>
      {fileData && (
        <div>
          <h2>Uploaded File Data:</h2>
          <pre>{JSON.stringify(fileData, null, 2)}</pre>
        </div>
      )}
      {/* {sheetcolumnNames && (
        <div>
          {sheetcolumnNames.map((item) => (
            <div key={item}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedColumnNames.includes(item)}
                  onChange={() => getColumnData(sheet, item)}
                />

                {item}
              </label>
            </div>
          ))}          
        </div>
      )} */}
          {sheetcolumnNames && (
            <div>
              {sheetcolumnNames.map((item) => (
                <FormControlLabel
                  key={item}
                  control={
                    <Checkbox
                      checked={selectedColumnNames.includes(item)}
                      onChange={() => getColumnData(sheet, item)}
                      name={item}
                      color="primary"
                    />
                  }
                  label={item}
                />
              ))}
            </div>
          )}
    </div>
  );
};

export default DataVisualise;
