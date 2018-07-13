import React, { Component } from 'react';      //import react component module.


//Armstrong Class extends component.
class Armstrong extends Component {

	// isArmstrong method check given number is Armstrong or not

	isArmstrong() {

		var num = prompt("Enter a number");
		var input_num = parseInt(num);
		var numLength = num.length;
		var sum = 0;
		for(var i = 0; i < numLength; i++)
		{
			var container = 1;
			var int_num = parseInt(num.charAt(i));
			for(var j = 0; j < numLength; j++)
			{
				container = container * int_num;
			}
			sum = sum + container;
		}
		if(input_num == sum) {
			document.write(sum + " is Armstrong Number");
		}
		else {
			document.write(input_num + " is not Armstrong Number");
		}
	}

	// Render function to creat component to be rendered on the DOM.
	
	render() {
		return(
			<div>
				<h2>Click Button to check Number is Armstrong or Not</h2>
				<input type = "button" value = "Click me" onClick = { this.isArmstrong } />
			</div>
			)
	}
}
export default Armstrong;

