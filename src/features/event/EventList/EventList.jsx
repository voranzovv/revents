import React, { Component, Fragment } from 'react';
import EventListItem from './EventListItem';
class EventList extends Component {
    state = {  }
    render() { 
        return ( 
            <Fragment>
                <EventListItem/>
                <EventListItem/>
                <EventListItem/>
                <EventListItem/>
                <EventListItem/>
            </Fragment>
         );
    }
}
 
export default EventList;