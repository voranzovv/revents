import React, { Component } from 'react';
import { Segment, Item, Icon, Button, List } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';
class EventListItem extends Component {
    state = {  }
    render() { 
      const {event, selectEvent, deleteEvent} =this.props;
      // console.log(selectEvent)
        return ( 
            <div>
                     <Segment.Group>
                        <Segment>
                          <Item.Group>
                            <Item>
                              <Item.Image size="tiny" circular src={event.hostPhotoURL} />
                              <Item.Content>
                                <Item.Header as="a">{event.title}</Item.Header>
                                <Item.Description>
                                  Hosted by <a>{event.hostedBy}</a>
                                </Item.Description>
                              </Item.Content>
                            </Item>
                          </Item.Group>
                        </Segment>
                        <Segment>
                          <span>
                            <Icon name="clock" /> {event.date} |
                            <Icon name="marker" /> {event.venue}
                          </span>
                        </Segment>
                        <Segment secondary>
                          <List horizontal>
                            {/* todo: attendees go here */}
                            {event.attendees && event.attendees.map(attendee =>(
                              <EventListAttendee key={attendee.id} attendee={attendee}/>
                            ))}

                          </List>
                        </Segment>
                        <Segment clearing>
                        <span>{event.description}</span>
                          <Button onClick={()=>selectEvent(event)} as="a" color="teal" floated="right" content="View" />
                          <Button onClick={()=>deleteEvent(event.id)} as="a" color="red" floated="right" content="Delete" />
                        </Segment>
                      </Segment.Group>
                      <br/>
            </div>
         );
    }
}
 
export default EventListItem;