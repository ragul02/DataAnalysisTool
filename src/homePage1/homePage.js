import React from "react";
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
  CardMedia,
} from "@mui/material/";

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

import { styled } from "@mui/system";
import "./homePage.css";
import ResponsiveAppBar from "../appBar/ResponsiveAppBar";

import chart1 from "../assets/images/chart1.jpg";
import graph from "../assets/images/graph.jpg";

import { useNavigate } from "react-router-dom";
import Marquee from "../marquee/marquee";
import Box from "@mui/material/Box";

const useStyles = styled((theme) => ({
  heroSection: {
    background: "#f5f5f5",
    padding: theme.spacing(8),
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(4),
    },
  },
  title: {
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
    color: "9798a4",
  },
  tagline: {
    color: "#666",
    marginBottom: theme.spacing(4),
  },
  ctaButton: {
    marginTop: theme.spacing(4),
  },
  featureSection: {
    padding: theme.spacing(6),
    textAlign: "center",
    background: "#fff",
  },
  featureTitle: {
    fontWeight: "bold",
    marginBottom: theme.spacing(4),
  },
  testimonialSection: {
    padding: theme.spacing(6),
    textAlign: "center",
    background: "#f5f5f5",
    marginTop: "15px",
  },
  testimonialTitle: {
    fontWeight: "bold",
    marginBottom: theme.spacing(4),
  },
  testimonialCard: {
    maxWidth: 300,
    margin: "0 auto",
  },
  feature: {
    marginTop: 50,
  },
  featureCard: {
    display: "flex",
    alignItems: "center",
    maxWidth: 400,
    margin: "auto",
    marginTop: theme.spacing(4),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  cardBox: {
    display: "flex",
    flexDirection: "column",
  },
  featureIcon: {
    fontSize: 80,
    marginBottom: theme.spacing(2),
  },
  chip: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    color: "aqua",
  },
  cardContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fcefef",
    // width: '100%',
    flex: "1 0 auto",
  },
  media: {
    width: 150, // Adjust as needed
    height: 150, // Adjust as needed
    marginTop: theme.spacing(2),
    flex: "0 0 auto",
    marginRight: theme.spacing(2),
    objectfit: "cover",
    maWidth: "55%",
     margin: '40px auto 30px',
    verticalAlign: 'middle',
  },
  Typography: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 400,
    fontSize: "1.6rem",
    lineHeight: "2.4rem",
    color: "#333",
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  // const gotoVisualize = () => navigate("/dataVisual");
  const gotoVisualize = () => navigate("/chartList");

  return (
    <>
      {/* <div>
        <ResponsiveAppBar></ResponsiveAppBar>
      </div> */}
      <Container>
        <div className="awesome-background">
          {/* Hero Section */}
          <div className="hero">
            <section className={classes.heroSection}>
              <Typography variant="h4" className={classes.title}>
                DataAnalyzer
              </Typography>
              <Typography variant="h5" className={classes.title}>
                Your Path to Data-Driven Success
              </Typography>
              <Typography variant="subtitle1" className={classes.tagline}>
                Unleash the Power of Your Data with DataAnalyzer: Insightful
                Data Analysis Made Easy
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className={classes.ctaButton}
                onClick={gotoVisualize}
              >
                Get Started
              </Button>
            </section>
          </div>
          {/* Slides= section */}
          {/* <Marquee /> */}

          {/* Feature Section */}
          <div className="feature">
            <section className={classes.featureSection}>
              {/* <Typography variant="h4" className={classes.featureTitle}>
              Key Features
            </Typography> */}
              <Stack spacing={2}>
                <Card sx={{ display: "flex" }}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ margin: "auto",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center", height: "50vh" }}>
                      <Chip
                        label="Data Visualization"
                        className={classes.chip}
                      />
                      <Typography variant="h4" align="center" component="div"
                      sx={{    fontSize: "25px", lineHeight: "1.6"}}>
                        Make complex data more accessible and understandable.
                      </Typography>
                      <Typography
                        variant="body1"
                        align="center"
                        component="div"
                        sx={{    fontSize: "17px", lineHeight: "1.6"}}
                      >
                        Create stunning visualizations from your data to gain
                        insights at a glance.
                      </Typography>
                    </CardContent>
                  </Box>
                  <CardMedia  sx={{ maxWidth: "55%", margin: '40px auto 30px',  }}
                  component="img" image={chart1} alt="chart1" />
                </Card>
                <Card sx={{ display: "flex" }}>
                  
                <CardMedia  sx={{ maxWidth: "55%", margin: '40px auto 30px',  }}
                  component="img" image={chart1} alt="chart1" />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ margin: "auto",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center", height: "50vh" }}>
                      <Chip
                        label="Data Visualization"
                        className={classes.chip}
                      />
                      <Typography variant="h4" align="center" component="div"
                      sx={{    fontSize: "25px", lineHeight: "1.6"}}>
                       Data Analysis
                      </Typography>
                      <Typography
                        variant="body1"
                        align="center"
                        component="div"
                        sx={{    fontSize: "17px", lineHeight: "1.6"}}
                      >
                         Perform advanced data analysis tasks such as statistical
                      analysis, data mining, and predictive modeling to uncover
                      meaningful insights from your data.
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>
                
                <Card sx={{ display: "flex" }}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ margin: "auto",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center", height: "50vh" }}>
                      <Chip
                        label="Data Visualization"
                        className={classes.chip}
                      />
                      <Typography variant="h4" align="center" component="div"
                      sx={{    fontSize: "25px", lineHeight: "1.6"}}>
                       Data Analysis
                      </Typography>
                      <Typography
                        variant="body1"
                        align="center"
                        component="div"
                        sx={{    fontSize: "17px", lineHeight: "1.6"}}
                      >
                      Generate interactive reports and dashboards to share with
                      your team or stakeholders for data-driven decision-making.
                      </Typography>
                    </CardContent>
                  </Box>
                  <CardMedia  sx={{ maxWidth: "55%", margin: '40px auto 30px',  }}
                  component="img" image={chart1} alt="chart1" />
                </Card>                
              </Stack>
            </section>
          </div>

          {/* Testimonial Section */}
          <section style={{'marginTop': '15px'}}>
            
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.testimonialCard}>
                <CardMedia  sx={{ maxWidth: "55%", margin: '40px auto 30px',  }}
                  component="img" image={graph} alt="graph" />
                  <CardContent>
                    <Typography variant="h6">
                      "DataAnalyzer has been a game-changer for our team. It has
                      helped us uncover insights from our data that we never
                      knew existed."
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.testimonialCard}>
                <CardMedia  sx={{ maxWidth: "55%", margin: '40px auto 30px',  }}
                  component="img" image={graph} alt="graph" />
                  <CardContent>
                    <Typography variant="h6">
                      "The user-friendly interface of DataAnalyzer makes it easy
                      for us to analyze complex data and make data-driven
                      decisions in real-time."
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.testimonialCard}>
                <CardMedia  sx={{ maxWidth: "55%", margin: '40px auto 30px',  }}
                  component="img" image={graph} alt="graph" />
                  <CardContent>
                    <Typography variant="h6">
                      "As a data scientist, I find DataAnalyzer to be a powerful
                      tool for performing advanced data analysis tasks. The
                      visualization and reporting features are exceptional."
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </section>
        </div>
      </Container>
    </>
  );
};

export default HomePage;
