import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { useDropzone } from "react-dropzone";
import "./dataVisualise.css";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
}



const DataVisualise = () => {
  const [fileData, setFileData] = useState(null);
  const [sheet, setSheet] = useState(null);
  const [sheetcolumnNames, setSheetColumnNames] = useState(null);
  const [sheetcolumnData, setSheetColumnData] = useState([
    // { columnName: "", data: [] },
  ]);
  const [selectedColumnNames, setSelectedColumnNames] = useState([]);
  const [labels, setLabels] = useState([]);
const [chartData, setChartData]=useState({
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ]
})
const [xAxislabel, setXAxislabel] = React.useState('');
  // const data = {
  //   labels,
  //   datasets: [
  //     {
  //       label: 'Dataset 1',
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       backgroundColor: 'rgba(255, 99, 132, 0.5)',
  //     }
  //   ]
  // };



  const setXAxisChange = (event) => {
    setXAxislabel(event.target.value);
    setchartLabels(sheet, event.target.value);
    console.log('XAxislabel', event.target.value)
  };

  useEffect(() => {
    console.log(sheetcolumnNames);
    console.log("useEfffect", sheetcolumnData); // Access the updated sheetcolumnData

    // getColumnData(sheet);
  }, [sheetcolumnNames, sheetcolumnData, chartData, labels, xAxislabel]);

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
    // setchartLabels(sheet);
    // getColumnData(sheet, "close ");
  };

  const setchartLabels = (sheet, xAxislabel) => {
    const range = XLSX.utils.decode_range(sheet["!ref"]);
    const columnData = [];
    for (let C = range.s.c; C <= range.e.c; ++C) {
      const cellAddress = XLSX.utils.encode_cell({ r: range.s.r, c: C });
      const cell = sheet[cellAddress];
      // Check if the column name is "close"
      console.log("setchartLabels", cell, xAxislabel , cell.v);
      if (cell.v === xAxislabel ) {
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
    setLabels(columnData);
    console.log('XAxus label', labels)
  }
  /** Load the Data from a Column in Excel Sheet */

  const getColumnData = async (sheet, columnName) => {
    console.log('Preparing chart labels', labels)
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
    setChartData({
      labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: columnData,
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
      ]
    })
    // setSheetColumnData({ columnName: columnName, data: columnData });
    // await setSheetColumnData((prevData) => {
    //   const newData = [
    //     ...prevData,
    //     { columnName: columnName, data: columnData },
    //   ];
    //   const uniqueData = Array.from(
    //     new Set(newData.map(JSON.stringify)),
    //     JSON.parse
    //   );
    //   return uniqueData;
    // });
    console.log('setChartData', chartData);

   

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
              <div>
              <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">X Axis</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={xAxislabel}
    label="xaxis"
    onChange={setXAxisChange}
  >
    {sheetcolumnNames.map((option, index) => {
          return (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          )
})}
  </Select>
</FormControl>
                </div>
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
            </div>
          )}
          
           <Bar options={options} data={chartData} />
    </div>
  );
};

export default DataVisualise;
