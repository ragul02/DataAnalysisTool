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
import { useNavigate } from "react-router-dom";

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
  },
  testimonialTitle: {
    fontWeight: "bold",
    marginBottom: theme.spacing(4),
  },
  testimonialCard: {
    maxWidth: 300,
    margin: "0 auto",
  },
  featureCard: {
    maxWidth: 400,
    margin: "auto",
    marginTop: theme.spacing(4),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
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
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fcefef"
  },
  media: {
    width: "100%",
    height: 0,
    paddingTop: "56.25%", // 16:9
    marginTop: theme.spacing(2),
  },  
  Typography: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 400,
    fontSize: '1.6rem',
    lineHeight: '2.4rem',
    color: '#333',
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const gotoVisualize =() =>navigate('/dataVisual')

  return (
    <>
      <div>
        <ResponsiveAppBar></ResponsiveAppBar>
      </div>
      <Container>
        <div className="awesome-background">
          {/* Hero Section */}
          <section className={classes.heroSection}>
            <Typography variant="h4" className={classes.title}>
              DataAnalyzer
            </Typography>
            <Typography variant="h5" className={classes.title}>
              Your Path to Data-Driven Success
            </Typography>
            <Typography variant="subtitle1" className={classes.tagline}>
              Unleash the Power of Your Data with DataAnalyzer: Insightful Data
              Analysis Made Easy
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className={classes.ctaButton}
              onClick={gotoVisualize}>
              Get Started
            </Button>
          </section>

          {/* Feature Section */}
          <section className={classes.featureSection}>
            <Typography variant="h4" className={classes.featureTitle}>
              Key Features
            </Typography>
            <Stack spacing={2}>
              <Card className={classes.featureCard}>
                <CardContent className={classes.cardContent}>
                  <Chip label="Data Visualization" className={classes.chip} />
                  <Typography variant="h4" align="center">
                    Make complex data more accessible and understandable.
                  </Typography>
                  <Typography variant="body1" align="center">
                    Create stunning visualizations from your data to gain
                    insights at a glance.
                  </Typography>
                  <CardMedia
                    className={classes.media}
                    component="img"
                    image={chart1}
                    alt="chart1"
                  />
                </CardContent>
              </Card>
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
                    Perform advanced data analysis tasks such as statistical
                    analysis, data mining, and predictive modeling to uncover
                    meaningful insights from your data.
                  </Typography>
                </CardContent>
              </Card>
              <Card className={classes.featureCard}>
                <CardContent>
                  <Typography
                    variant="h5"
                    className={classes.featureIcon}
                    align="center"
                  >
                    &#x1F4CC;
                  </Typography>
                  <Chip label="Data Reporting" color="primary" />
                  <Typography variant="body1">
                    Generate interactive reports and dashboards to share with
                    your team or stakeholders for data-driven decision-making.
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
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
                      helped us uncover insights from our data that we never
                      knew existed."
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
                      for us to analyze complex data and make data-driven
                      decisions in real-time."
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
        </div>
      </Container>
    </>
  );
};

export default HomePage;
