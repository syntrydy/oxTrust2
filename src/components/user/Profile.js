import React from "react";
import Card from "@material-ui/core/Card";
import Image from "../../assets/images/user2.png";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import CardContent from "@material-ui/core/CardContent";

const Profile = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={2} md={4}>
      <Card>
          <CardContent>
            
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={10} md={8}>
        <Card>
          <CardContent>
            <Grid container spacing={0}>
              <Grid item xs={5} md={3}>
                <InputLabel>User name:</InputLabel>
              </Grid>
              <Grid item xs={7} md={3}>
                <InputLabel>Gasmyr</InputLabel>
              </Grid>
              <Grid item xs={5} md={3}>
                <InputLabel>Disply Name:</InputLabel>
              </Grid>
              <Grid item xs={7} md={3}>
                <InputLabel>Thomas Gasmyr</InputLabel>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Profile;
