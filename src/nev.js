import React, { Component } from 'react';

class AutoComplete extends Component {
	constructor() {
		super()
		this.state = {
			text_input:''
		}
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({text_input:event.target.value})
	}
	handleSubmit(event) {
    alert('A name was submitted: ' + this.state.text_input);
    event.preventDefault();
  }


	/*initialize() {
        var input = document.getElementById('searchTextField');
        var options = {
        	types: ['geocode'] 
        };
        var autocomplete = new google.maps.places.Autocomplete(input, options);
      }*/

    //google.maps.event.addDomListener(window, 'load', initialize);
    
	render() {
		console.log(this.state.text_input);
		return(
			<div>
				<form onSubmit = {this.handleSubmit}>
  					<h2>Enter your Address</h2>
  					<input id = "searchTextField" type = "text" onChange = {this.handleChange} placeholder = "Enter a location" />
  				</form>
			</div>
		)
	}
}

export default AutoComplete;