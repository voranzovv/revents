import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";
import cuid from "cuid";
import { createEvent, deleteEvent, updateEvent } from "../eventActions";
import { connect } from "react-redux";

const mapState = state => ({
  events: state.events
});

const actions = {
  createEvent,
  deleteEvent,
  updateEvent
};

class EventDashboard extends Component {
  state = {
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
    this.props.createEvent(newEvent);
    this.setState(({ events }) => ({
      events: [...events, newEvent]
    }));
  };

  handleSelectEvent = event => {
    this.setState({ selectEvent: event, isOpen: true });
  };

  handleUpdateEvent = updatedEvent => {
    this.props.updateEvent(updatedEvent);
    this.setState(({ events }) => ({
      isOpen: false,
      selectEvent: null
    }));
  };

  handleDeleteEvent = id => {
    this.props.deleteEvent(id);
  };

  render() {
    const { isOpen, selectEvent } = this.state;
    const { events } = this.props;
    console.log(this.props);
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

export default connect(mapState, actions)(EventDashboard);
