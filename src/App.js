import React, {Component, Fragment} from 'react';
import {Container } from 'semantic-ui-react';
import EventDashboard from './features/event/EventDashboard/eventDashboard';
import NavBar from './features/nav/navBar';
import './index.css'


class App extends Component{
  render(){
  return (
    <Fragment>
        <NavBar />
          <Container className='main'>
        <EventDashboard/>
      </Container>
    </Fragment>

  );
}
}

export default App;
