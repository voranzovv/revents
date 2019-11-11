import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react';

export default class EventForm extends Component {

  state ={
    title:'',
    date:'',
    city:'',
    venue:'',
    hostedBy:'',
  }

  handleInputChange = () =>{
    console.log("changed");
  }
    render() {
      const {cancleFormOpen} = this.props;
      const {title, date, city, venue, hostedBy } = this.state;
        return (
                  <Segment>
                    <Form>
                      <Form.Field>
                        <label>Event Title</label>
                        <input placeholder="First Name" name='title' onChange={this.handleInputChange} value={title}/>
                      </Form.Field>
                      <Form.Field>
                        <label>Event Date</label>
                        <input type="date" placeholder="Event Date" name='date' onChange={this.handleInputChange} value={date}/>
                      </Form.Field>
                      <Form.Field>
                        <label>City</label>
                        <input placeholder="City event is taking place" name='city' onChange={this.handleInputChange} value={city}/>
                      </Form.Field>
                      <Form.Field>
                        <label>Venue</label>
                        <input placeholder="Enter the Venue of the event" name='venue' onChange={this.handleInputChange} value={venue} />
                      </Form.Field>
                      <Form.Field>
                        <label>Hosted By</label>
                        <input placeholder="Enter the name of person hosting" name='hostedBy' onChange={this.handleInputChange} value={hostedBy}/>
                      </Form.Field>
                      <Button positive type="submit">
                        Submit
                      </Button>
                      <Button type="button" onClick={cancleFormOpen}>Cancel</Button>
                    </Form>
                  </Segment>
        )
    }
}
