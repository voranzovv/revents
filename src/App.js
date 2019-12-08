import React, { Component, Fragment } from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "./features/event/EventDashboard/eventDashboard";
import NavBar from "./features/nav/navBar";
import "./index.css";
import { Route } from "react-router-dom";
import HomePage from "./features/home/homePage";
import EventDetailedPage from "./features/event/eventDetailed/eventDetailedPage";
import PeopleDashboard from "./features/user/peopleDashboard/peopleDashboard";
import UserDetailedPage from "./features/userDetailed/userDetailedPage";
import SettingDashboard from "./features/settings/settingDashboard";
import EventForm from "./features/event/EventForm/EventForm";
import TestComponent from "./features/testArea/testComponent";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route path="/" component={HomePage} exact />
        <Route
          path="/(.+)"
          render={() => (
            <Fragment>
              <NavBar />
              <Container className="main">
                <Route exact path="/events" component={EventDashboard} />
                <Route path="/events/:id" component={EventDetailedPage} />
                <Route path="/people" component={PeopleDashboard} />
                <Route path="/people/:id" component={UserDetailedPage} />
                <Route path="/settings" component={SettingDashboard} />
                <Route path="/createEvent" component={EventForm} />
                <Route path="/test" component={TestComponent} />
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

export default App;
