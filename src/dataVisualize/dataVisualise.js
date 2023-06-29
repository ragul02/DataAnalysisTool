import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import { useDropzone } from "react-dropzone";

import "./dataVisualise.css";

const DataVisualise = () => {
  const [fileData, setFileData] = useState(null);
  const [sheetcolumnNames, setSheetColumnNames] = useState(null);

  
useEffect(() => {
  console.log(sheetcolumnNames);
  // getColumnData(sheet);
}, [sheetcolumnNames]);

  const handleFileUpload = (acceptedFiles) => {
    const file = acceptedFiles[0];

    const reader = new FileReader();
    reader.onload = (e) => {
      const workbook = XLSX.read(e.target.result, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
      console.log("workbook", workbook, +"" + "sheetName" + sheetName, sheet);

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

  const getColumnNames = (sheet) => {
    const range = XLSX.utils.decode_range(sheet['!ref']);
    const columnNames = [];

    for (let C = range.s.c; C <= range.e.c; ++C) {
      const cellAddress = XLSX.utils.encode_cell({ r: range.s.r, c: C });
      const cell = sheet[cellAddress];
      columnNames.push(cell.v);
    }

    setSheetColumnNames(columnNames);
    console.log(sheetcolumnNames)
    getColumnData(sheet);
  };

  const getColumnData =(sheet)=> {
    // Define the column you want to retrieve data from (e.g., column A)
const columnName = 'close';

// Extract column data
const columnData = [];
const range = XLSX.utils.decode_range(sheet['!ref']);
for (let R = range.s.r + 1; R <= range.e.r; ++R) {
  
  const cellAddress = columnName + R;
  const cell = sheet[cellAddress];
  columnData.push(cell.v);
}
console.log(columnData)

  }

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
    </div>
  );
};

export default DataVisualise;
