import React from 'react';
import { Container, Typography, Button, Grid, Card, CardContent } from '@mui/material/';
// import { makeStyles } from '@mui/material/styles';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import BarChartIcon from '@mui/icons-material/BarChart';
import LineChartIcon from '@mui/icons-material/ShowChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import { styled } from "@mui/system";

import ResponsiveAppBar from '../appBar/ResponsiveAppBar';

const useStyles =  styled((theme)=>({
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
    featureCard: {
      maxWidth: 300,
      margin: "0 auto",
      marginBottom: theme.spacing(4),
    },
    featureIcon: {
      fontSize: 48,
      color: theme.palette.primary.main,
      marginBottom: theme.spacing(2),
    },
    testimonialSection: {
      padding: theme.spacing(6),
      textAlign: "center",
      background: "#f5f5f5",
    },
    testimonialTitle: {
      fontWeight: "bold",
      marginBottom: theme.spacing(4),
    },
    testimonialCard: {
      maxWidth: 300,
      margin: "0 auto",
    },
  }));
  
  const HomePage = () => {
    const classes = useStyles();
  
    return (
      <>
      <div>

      <ResponsiveAppBar></ResponsiveAppBar>
      </div>
        {/* Hero Section */}
        <section className={classes.heroSection}>
          <Typography variant="h3" className={classes.title}>
          DataAnalyzer: Your Path to Data-Driven Success
          </Typography>
          <Typography variant="subtitle1" className={classes.tagline}>
          Unleash the Power of Your Data with DataAnalyzer: Insightful Data Analysis Made Easy
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.ctaButton}
          >
            Get Started
          </Button>
        </section>
  
        {/* Feature Section */}
        <section className={classes.featureSection}>
          <Typography variant="h4" className={classes.featureTitle}>
            Key Features
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.featureCard}>
                <CardContent>
                  <Typography
                    variant="h5"
                    className={classes.featureIcon}
                    align="center"
                  >
                    &#x1F4C8;
                  </Typography>
                  <Typography variant="h6">Data Visualization</Typography>
                  <Typography variant="body1">
                    Create stunning visualizations from your data to gain
                    insights at a glance.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.featureCard}>
                <CardContent>
                  <Typography
                    variant="h5"
                    className={classes.featureIcon}
                    align="center"
                  >
                    &#x1F4CA;
                  </Typography>
                  <Typography variant="h6">Data Analysis</Typography>
                  <Typography variant="body1">
                    Perform advanced data analysis            tasks such as statistical analysis, data mining, and predictive
            modeling to uncover meaningful insights from your data.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.featureCard}>
          <CardContent>
            <Typography
              variant="h5"
              className={classes.featureIcon}
              align="center"
            >
              &#x1F4CC;
            </Typography>
            <Typography variant="h6">Data Reporting</Typography>
            <Typography variant="body1">
              Generate interactive reports and dashboards to share with your
              team or stakeholders for data-driven decision-making.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </section>

  {/* Testimonial Section */}
  <section className={classes.testimonialSection}>
    <Typography variant="h4" className={classes.testimonialTitle}>
      What Our Customers Say
    </Typography>
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.testimonialCard}>
          <CardContent>
            <Typography variant="h6">
              "DataAnalyzer has been a game-changer for our team. It has
              helped us uncover insights from our data that we never knew
              existed."
            </Typography>
            <Typography variant="subtitle2" align="right">
              - John Doe, CEO of ABC Company
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.testimonialCard}>
          <CardContent>
            <Typography variant="h6">
              "The user-friendly interface of DataAnalyzer makes it easy
              for us to analyze complex data and make data-driven decisions
              in real-time."
            </Typography>
            <Typography variant="subtitle2" align="right">
              - Jane Smith, Data Analyst at XYZ Corporation
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.testimonialCard}>
          <CardContent>
            <Typography variant="h6">
              "As a data scientist, I find DataAnalyzer to be a powerful
              tool for performing advanced data analysis tasks. The
              visualization and reporting features are exceptional."
            </Typography>
            <Typography variant="subtitle2" align="right">
              - Michael Johnson, Data Scientist at PQR Labs
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </section>
</>
);
};

export default HomePage;
  
  
  
  
