import React, { Component, Fragment } from 'react';
import EventListItem from './EventListItem';
class EventList extends Component {
    state = {  }
    render() { 
        const {events, selectEvent} = this.props
        //  console.log(selectEvent)
        return ( 
            <Fragment>
                {events.map(event =>(
                    <EventListItem key={event.id} event={event} selectEvent={selectEvent}/>
                ))}

            </Fragment>
         );
    }
}
 
export default EventList;