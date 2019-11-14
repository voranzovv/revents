import React from "react";
import { Grid } from "semantic-ui-react";
import SettingNav from "./settingNav";
import { Route, Redirect, Switch } from "react-router-dom";
import BasicPage from "./basicPage";
import AboutPage from "./aboutPage";
import PhotosPage from "./photosPage";
import AccountPage from "./accountPage";
const SettingDashboard = () => {
  return (
    <Grid>
      <Grid.Column width={12}>
        <Switch>
          <Redirect exact from="/settings" to="/settings/basic" />
          <Route path="/settings/basic" component={BasicPage} />
          <Route path="/settings/about" component={AboutPage} />
          <Route path="/settings/photos" component={PhotosPage} />
          <Route path="/settings/account" component={AccountPage} />
        </Switch>
      </Grid.Column>

      <Grid.Column width={4}>
        <SettingNav />
      </Grid.Column>
    </Grid>
  );
};

export default SettingDashboard;
