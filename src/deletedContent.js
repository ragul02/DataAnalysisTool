

//     const useStyles =  styled((theme)=>({ // <--- Add this ✅

//   root: {
//     minHeight: '100vh',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   container: {
//     padding: theme.spacing(4),
//     textAlign: 'center',
//     borderRadius: theme.spacing(2),
//     backgroundColor: theme.palette.background.default,
//   },
//   title: {
//     fontWeight: 'bold',
//     marginBottom: theme.spacing(4),
//   },
//   button: {
//     margin: theme.spacing(2),
//     padding: theme.spacing(2, 4),
//   },
//   icon: {
//     fontSize: 48,
//     marginRight: theme.spacing(1),
//   },
// }));

// const HomePage = () => {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Container maxWidth="sm" className={classes.container}>
//         <Typography variant="h3" className={classes.title}>
//           Welcome to Data Analysis Tool
//         </Typography>
//         <Typography variant="body1">
//           Choose a chart type to get started:
//         </Typography>
//         <Grid container justify="center">
//           <Grid item xs={12} sm={6}>
//             <Button
//               variant="contained"
//               color="primary"
//               className={classes.button}
//               startIcon={<InsertChartIcon className={classes.icon} />}
//             >
//               Column Chart
//             </Button>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Button
//               variant="contained"
//               color="secondary"
//               className={classes.button}
//               startIcon={<BarChartIcon className={classes.icon} />}
//             >
//               Bar Chart
//             </Button>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Button
//               variant="contained"
//               color="primary"
//               className={classes.button}
//               startIcon={<LineChartIcon className={classes.icon} />}
//             >
//               Line Chart
//             </Button>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Button
//               variant="contained"
//               color="secondary"
//               className={classes.button}
//               startIcon={<PieChartIcon className={classes.icon} />}
//             >
//               Pie Chart
//             </Button>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Button
//               variant="contained"
//               color="primary"
//               className={classes.button}
//               startIcon={<ScatterPlotIcon className={classes.icon} />}
//             >
//               Scatter Plot
//             </Button>
//           </Grid>
//         </Grid>
//       </Container>
//     </div>
//   );
// };

// export default HomePage;
