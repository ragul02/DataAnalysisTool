// ChartList.js
import React from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";

const chartsData = [
  { id: 1, title: "Graph Chart", description: "Description of Chart 1" },
  { id: 2, title: "Chart 2", description: "Description of Chart 2" },
  { id: 1, title: "Graph Chart", description: "Description of Chart 1" },
  { id: 2, title: "Chart 2", description: "Description of Chart 2" },
  { id: 1, title: "Graph Chart", description: "Description of Chart 1" },
  { id: 2, title: "Chart 2", description: "Description of Chart 2" },
  { id: 1, title: "Graph Chart", description: "Description of Chart 1" },
  { id: 2, title: "Chart 2", description: "Description of Chart 2" },
  // Add more chart data as needed
];

const ChartList = () => {
  return (
    <Container>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Grid container spacing={2}>
          {chartsData.map((chart) => (
            <Grid item xs={12} sm={6} md={4} key={chart.id}>
              <Card component={Link} to={`/chart/${chart.id}`}>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {chart.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {chart.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
};

export default ChartList;
