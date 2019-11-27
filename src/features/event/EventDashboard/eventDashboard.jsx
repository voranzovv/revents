import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";
import cuid from "cuid";


class EventDashboard extends Component {
  state = {
    events: eventsFromDashboard,
    isOpen: false,
    selectEvent: null
  };

  // handleIsOpenToggle = () =>
  //   this.setState(({ isOpen }) => ({
  //     isOpen: !isOpen
  //   }));

  handleCreateFormOpen = () => {
    this.setState({ isOpen: true, selectEvent: null });
  };

  handleFormCancel = () => {
    this.setState({ isOpen: false });
  };

  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/user.png";
    this.setState(({ events }) => ({
      events: [...events, newEvent]
    }));
  };

  handleSelectEvent = event => {
    this.setState({ selectEvent: event, isOpen: true });
  };

  handleUpdateEvent = updatedEvent => {
    this.setState(({ events }) => ({
      events: events.map(event => {
        if (event.id === updatedEvent.id) {
          return { ...updatedEvent };
        } else {
          return event;
        }
      }),
      isOpen: false,
      selectEvent: null
    }));
  };

  handleDeleteEvent = id => {
    this.setState(({ events }) => ({
      events: events.filter(e => e.id !== id)
    }));
  };

  render() {
    const { events, isOpen, selectEvent } = this.state;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            events={events}
            selectEvent={this.handleSelectEvent}
            deleteEvent={this.handleDeleteEvent}
          />
        </Grid.Column>

        <Grid.Column width={6}>
          <Button
            positive
            content="Create Events"
            onClick={this.handleCreateFormOpen}
          />
          {isOpen && (
            <EventForm
              updatedEvent={this.handleUpdateEvent}
              key={selectEvent ? selectEvent.id : 0}
              selectEvent={selectEvent}
              cancleFormOpen={this.handleFormCancel}
              createEvent={this.handleCreateEvent}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

export default EventDashboard;
