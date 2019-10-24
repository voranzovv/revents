import React, { Component } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                      <Menu inverted fixed="top">
                        <Container>
                          <Menu.Item header>
                            <img src="https://image.flaticon.com/icons/png/512/87/87386.png" alt="logo" />
                            Re-vents
                          </Menu.Item>
                          <Menu.Item name="Events" />
                          <Menu.Item>
                            <Button floated="right" positive inverted content="Create Event" />
                          </Menu.Item>
                          <Menu.Item position="right">
                            <Button basic inverted content="Login" />
                            <Button basic inverted content="Sign Out" style={{marginLeft: '0.5em'}} />
                          </Menu.Item>
                        </Container>
                      </Menu>
            </div>
         );
    }
}
 
export default NavBar;