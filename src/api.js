import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  constructor() {
    super()
    this.state = {

      person:''
    }
  }

  componentDidMount() {
    axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670,151.1957&radius=500&types=food&name=cruise&key=AIzaSyABxYQ6rl_fg2CZ4ERKRqKg8K6j1U2GLVM',
    {
      headers: { 
      'Access-Control-Allow-Origin' : '*',
      },
    })
    .then(res => {             
      const person = res.data;
      console.log(person);
    })
  }

  render() {
    return (
      <div></div>
    );
  }
}