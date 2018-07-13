import React, { Component } from 'react'     //import react component module


// pattern2 class extends components

class Pattern2 extends Component {

	dimondPatternCreater() {
		document.write("<center>")
		var k=0,count=0;

		for(var i=1; i<=7; i++) {
			if(i<=4) {
				k=k+1;
				count=i;
			}
			else {
				k=k-1;
				count=8-i;
			}

			for(var j=1; j<=7; j++) {
				if(j>=5-k&&j<=3+k) {
					if(count>1&&j<=4) {

						document.write(count);
						count=count-1;
					}
					else {
						document.write(count)
						count=count+1;
					}
				}
				else {
					document.write('&nbsp');
				}
			}
			document.write("<br />")
		}
	}

	// Render function to creat component to be rendered on the DOM.
	// This method must return a single parent element as you can see here.

	render() {
		return(
			<div>
				<h2> Click Button for Dimond Pattern </h2>
				<input type = "button" value = "Click me" onClick = {this.dimondPatternCreater} />
			</div>
			)
	}
}
export default Pattern2;