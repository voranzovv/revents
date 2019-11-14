import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";
import SignedOutMenu from "./menus/signedOutMenu";
import SignedInMenu from "./menus/signedInMenu";
class NavBar extends Component {
  state = {
    authenticated: true
  };

  handleSignIn = () => {
    this.setState({ authenticated: true });
    console.log("jh");
  };

  handleSignOut = () => {
    this.setState({ authenticated: false });
    this.props.history.push("/");
  };
  render() {
    const { authenticated } = this.state;
    return (
      <div>
        <Menu inverted fixed="top">
          <Container>
            <Menu.Item as={NavLink} exact to="/" header>
              <img
                src="https://image.flaticon.com/icons/png/512/87/87386.png"
                alt="logo"
              />
              Re-vents
            </Menu.Item>
            <Menu.Item name="Events" as={NavLink} to="/events" />
            <Menu.Item name="People" as={NavLink} to="/people" />
            <Menu.Item name="Test" as={NavLink} to="/test" />
            <Menu.Item>
              <Button
                as={Link}
                to="/createEvent"
                floated="right"
                positive
                inverted
                content="Create Event"
              />
            </Menu.Item>
            {authenticated ? (
              <SignedInMenu signOut={this.handleSignOut} />
            ) : (
              <SignedOutMenu signIn={this.handleSignIn} />
            )}
          </Container>
        </Menu>
      </div>
    );
  }
}

export default withRouter(NavBar);
