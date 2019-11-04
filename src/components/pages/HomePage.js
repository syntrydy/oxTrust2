import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import OxResponseBarChart from "../layouts/OxResponsiveBarChart";
const colorBlue="#5DA29B";
const data = [
  {
    date: "01-11-2019",
    success: 142,
    error: 3
  },
  {
    date: "02-11-2019",
    success: 165,
    error:1
  },
  {
    date: "03-11-2019",
    success: 100,
    error: 0
  },
  {
    date: "04-11-2019",
    success: 179,
    error: 4
  },
  {
    date: "05-11-2019",
    success: 147,
    error: 1
  },
  {
    date: "06-11-2019",
    success: 46,
    error: 3
  },
  {
    date: "07-11-2019",
    success: 41,
    error: 2
  }
];
const keys = ["success", "error"];

const HomePage = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent style={{ height: "250px" }}>
              <OxResponseBarChart keys={keys} data={data}></OxResponseBarChart>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Refresh
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent style={{ height: "250px" }}>
              <OxResponseBarChart keys={keys} data={data}></OxResponseBarChart>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Refresh
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent style={{ height: "250px" }}>
              <OxResponseBarChart keys={keys} data={data}></OxResponseBarChart>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Refresh
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
