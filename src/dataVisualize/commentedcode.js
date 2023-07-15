//   return (
//     <div className="excel-uploader">
//       <div
//         {...getRootProps()}
//         className={`dropzone ${isDragActive ? "active" : ""}`}
//       >
//         <input {...getInputProps()} />
//         {isDragActive ? (
//           <p>Drop the Excel file here...</p>
//         ) : (
//           <p>Drag and drop an Excel file here, or click to select a file</p>
//         )}
//       </div>
//       <div>
//       {fileData && (
//         <div>
//           <h2>Uploaded File Data:</h2>
//           <pre>{JSON.stringify(fileData, null, 2)}</pre>
//         </div>
//       )}
//       </div>
//       {/* {sheetcolumnNames && (
//         <div>
//           {sheetcolumnNames.map((item) => (
//             <div key={item}>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={selectedColumnNames.includes(item)}
//                   onChange={() => getColumnData(sheet, item)}
//                 />

//                 {item}
//               </label>
//             </div>
//           ))}          
//         </div>
//       )} */}
//       <div>
//           {sheetcolumnNames && (
//             <div>
//               <div>
//               <FormControl fullWidth>
//   <InputLabel id="demo-simple-select-label">X Axis</InputLabel>
//   <Select
//     labelId="demo-simple-select-label"
//     id="demo-simple-select"
//     value={xAxislabel}
//     label="xaxis"
//     onChange={setXAxisChange}
//   >
//     {sheetcolumnNames.map((option, index) => {
//           return (
//             <MenuItem key={index} value={option}>
//               {option}
//             </MenuItem>
//           )
// })}
//   </Select>
// </FormControl>
//                 </div>
//                 <div>
//               {sheetcolumnNames.map((item) => (
//                 <FormControlLabel
//                   key={item}
//                   control={
//                     <Checkbox
//                       checked={selectedColumnNames.includes(item)}
//                       onChange={() => getColumnData(sheet, item)}
//                       name={item}
//                       color="primary"
//                     />
//                   }
//                   label={item}
//                 />
//               ))}
//               </div>
//             </div>
//           )}
//           </div>
//           <div>
//            <Bar options={options} data={chartData} />
//            </div>
//     </div>
//   );