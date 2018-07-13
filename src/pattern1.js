import React, { Component } from 'react';     //import react component module.

//Pattern1 class extends component.

class Pattern1 extends Component {

	//charPattern method will print pattern of charactor.

	charPattern() {
		document.write("<center>");
		var s = '&nbsp&nbsp';
		var count = 64;
		for(var i = 1; i <= 7; i++)
		{
			count=count+1;
			var ch = String.fromCharCode(count);
			for(var j = 1; j <= 7; j++)
			{
				if(j >= 8 - i)
				{
				 	document.write(ch);
				}
				else{
					document.write(s);
				}
			}
			document.write("<br />");
		}
	}

	// Render function to creat component to be rendered on the DOM.

	render() {
		return(
			<div>
				<h2>Click Button to Show pattern</h2>
				<input type = "button" value = "Click me" onClick = { this.charPattern } />
			</div>
		)
	}
}
 export default Pattern1;