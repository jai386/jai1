import React,{Component} from 'react';  // import react component module
import './calc.css';                    // import css module from calc.css file



//create a class which extends react component
export default class Calculator extends Component {
	constructor() {
		super();

		//set our default state

		this.state = {
			displynum:'0',
			result:''
		}

		//Bind all method of calculator class
		// We did this because 'this' would refer to the source of the click events

		this.inputNumber = this.inputNumber.bind(this);
		this.clearButton = this.clearButton.bind(this);
		this.allClearButton = this.allClearButton.bind(this);
		this.inputDot = this.inputDot.bind(this);
		this.calc = this.calc.bind(this);
	}

	//inputNumber method used for take input onClick of buttons

  inputNumber(digit) {
  	const { displynum } = this.state
  	
  	if(displynum.length === 1 && (displynum === '*' || displynum === '+' || displynum === '%' || displynum === '/')  ) {
  		this.setState({displynum:'0'});
  	}
  	else {
	  	this.setState({
	  		displynum:displynum ==='0' ? String(digit) : displynum + digit
	  	})
  	}
	}

	//inputDot method used for take input dot and validate

	inputDot() {
    const { displynum } = this.state
    const indexAdd = displynum.indexOf('+');
    const indexdot = displynum.indexOf('.');
    const indexSub = displynum.indexOf('-');
    const indexMul = displynum.indexOf('*');
    const indexDiv = displynum.indexOf('/');
    const indexMod = displynum.indexOf('%');


    if(displynum.indexOf('.') === -1 || ((indexAdd - indexdot) > 1) || ((indexSub - indexdot) > 1) || ((indexMul - indexdot) > 1)
    	|| ((indexDiv - indexdot) > 1) || ((indexMod - indexdot) > 1)) {
    	this.setState({displynum:displynum + '.'})
    }

  }

  // clearButton method is used for clear one charactor from displaynum onClick of C button

	clearButton() {
		const { displynum } = this.state
		if(displynum.length > 1)
			this.setState({displynum:displynum.slice(0,-1)})  //setState is used for update state
		else
			this.setState({displynum:'0'})
	}

	//allClearButton is used for clean display onClick of AC button

	allClearButton(str) {
		const { displynum } = this.state
		this.setState({displynum:'0'})
	}

	//calc method is used for calculate the mathmetical expression enter by user

	calc() {
		
		const { displynum, result } = this.state
		var exp_check = displynum.toString().substring(displynum.length - 1);
		if(exp_check == '+' || exp_check == '-' || exp_check == '/' || exp_check == '*' || exp_check == '%')
		{
			this.setState({displynum:'wrong data press AC'});
		}
		else {
			this.setState({displynum:eval(this.state.displynum).toString()})   //eval function take mathmatical expression and give expression result.

		}
	}

	render() {
		return(
			<div className = "body">
				<form onChange = {this.handleAddNumber}>
					<input type = "text"   name="txt1" className = "textarea" value={this.state.displynum} /><br/>
					<input type = "button" name = "btnAC" id = "btnac" value = "AC" onClick = { this.allClearButton } />
					<input type = "button" name = "btnC" id = "btnc" value = "C" onClick = { this.clearButton } />
					<input type = "button" name = "btnmod" id = "btn" value = "%" onClick = { () => this.inputNumber('%')} /><br/>
					<input type = "button" name = "btn9" id = "btn" value = "9" onClick = { () => this.inputNumber(9)} />
					<input type = "button" name = "btn8" id = "btn" value = "8" onClick = { () => this.inputNumber(8)} />
					<input type = "button" name = "btn7" id = "btn" value = "7" onClick = { () => this.inputNumber(7)} />
					<input type = "button" name = "btnadd" id = "btn" value = "+" onClick = { () => this.inputNumber('+')} /><br/>
					<input type = "button" name = "btn6" id = "btn" value = "6" onClick = { () => this.inputNumber(6)} />
					<input type = "button" name = "btn5" id = "btn" value = "5" onClick = { () => this.inputNumber(5)} />
					<input type = "button" name = "btn4" id = "btn" value = "4" onClick = { () => this.inputNumber(4)} />
					<input type = "button" name = "btnsub" id = "btn" value = "-" onClick = { () => this.inputNumber('-')} /><br/>
					<input type = "button" name = "btn3" id = "btn" value = "3" onClick = { () => this.inputNumber(3)} />
					<input type = "button" name = "btn2" id = "btn" value = "2" onClick = { () => this.inputNumber(2)} />
					<input type = "button" name = "btnone" id = "btn" value = "1" onClick = { () => this.inputNumber(1)} />
					<input type = "button" name = "btnmty" id = "btn" value = "X" onClick = { () => this.inputNumber('*')} /><br/>
					<input type = "button" name = "btn0" id = "btn" value = "0" onClick = { () => this.inputNumber(0)} />
					<input type = "button" name = "btndot" id = "btn" value = "." onClick = {this.inputDot} />
					<input type = "button" name = "btndivide" id = "btn" value = "/" onClick = { () => this.inputNumber('/')} />
					<input type = "button" name = "eqlbtn" id = "btn" value = "=" onClick = {this.calc} />
				</form>
			</div>	
		);
	}
}