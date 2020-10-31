import React from 'react';
import '../main.css';
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display1: "0",
            display2: '',
            lastIndex: '',
            pointHere: false
        }
        this.showOnDisplay = this.showOnDisplay.bind(this);
        this.clearDisplay = this.clearDisplay.bind(this);
        this.getAnswer = this.getAnswer.bind(this)
    }
    clearDisplay () {
        this.setState({
            display1: "0",
            display2: '',
            lastIndex: '',
            pointHere: false
        })
    }
    getAnswer () {
        if(this.state.display2 !== '' && /\d/.test(this.state.lastIndex)) {
        const answer = eval(this.state.display2);
        console.log(this.state.display2)
        this.setState({
            display1: '',
            display1: answer,
            display2: answer
        })
        }
    }
    showOnDisplay (event) {
        const buttonValue = event.target.value;
        if(this.state.display1 === "0" && !/\D/.test(buttonValue)) {
            this.setState({
                display1: this.state.display1 = buttonValue,
                display2: this.state.display2 = buttonValue,
                lastIndex: this.state.lastIndex = this.state.display2.slice(-1)
            })
            console.log("1 condition")
        }
        else if(/\D/.test(buttonValue) && buttonValue !==  "." &&  !/\D/.test(this.state.lastIndex) && this.state.display1 !== "0" && this.state.display1 !== "0.") {
            this.setState({
                display1: this.state.display1 = buttonValue,
                display2: this.state.display2 += buttonValue,
                lastIndex: this.state.lastIndex = this.state.display2.slice(-1),
                pointHere: this.state.pointHere = false
            }) 
                
            console.log("2 condition")
        }
        else if(/\D/.test(this.state.display1) && this.state.display1.length === 1 && buttonValue !== "." ) {
            this.setState({
                display1: '',
                display1: this.state.display1 = buttonValue,
                lastIndex: this.state.lastIndex = this.state.display2.slice(-1),
                display2: this.state.display2.slice(0, -1) + buttonValue
            })
            if(!/\D/.test(buttonValue) || buttonValue === "-" && this.state.lastIndex !== "-" && this.state.lastIndex !== "." ) {
                this.setState({
                display2: this.state.display2  += buttonValue,
                lastIndex: this.state.lastIndex = this.state.display2.slice(-1),
            })
        }
            console.log("3 condition")
            if(buttonValue !== "-" && buttonValue !== "." && /\D/.test(buttonValue) && this.state.lastIndex === "-" && /\d/.test(this.state.display2.slice(-3, -2))) {
                this.setState({
                    display2:  this.state.display2.slice(0, -2) + buttonValue
                })
                if(this.state.display2.slice(-3, -2) === '') {
                    this.setState({
                        display2: this.state.display2.slice(0, -1) + buttonValue
                    })
                }
            }
        }
        else if(/\d/.test(buttonValue) ) {
            this.setState({
                display1: this.state.display1 += buttonValue,
                display2: this.state.display2  += buttonValue,
                lastIndex: this.state.lastIndex = this.state.display1.slice(-1)
                
            })
            console.log("4 condition")
        }
        else if(buttonValue === "." && this.state.display1 === "0" && this.state.lastIndex !== "0") {
            this.setState({
                display1: this.state.display1 = "0.",
                display2: this.state.display1  = "0.",
                pointHere: this.state.pointHere = true,
                lastIndex: this.state.lastIndex = this.state.display2.slice(-1)
            })
            console.log("5 condition")
        }
        else if(buttonValue === "." && /\D/.test(this.state.lastIndex) && this.state.lastIndex !== ".") {
            this.setState({
                display2: this.state.display2 + "0" + buttonValue,
                display1: this.state.display1 = "0" + buttonValue,
                pointHere: this.state.pointHere = true,
                lastIndex: this.state.lastIndex = this.state.display2.slice(-1)
            })
        }
        else if(buttonValue === "." && this.state.pointHere === false) {
            this.setState({
                display1: this.state.display1  += buttonValue,
                display2: this.state.display2  += buttonValue,
                pointHere: this.state.pointHere = true,
                lastIndex: this.state.lastIndex = this.state.display2.slice(-1)
            })
            console.log("6 condition")
        }
        console.log(buttonValue, this.state.display1, this.state.display2.substring(-1), this.state.lastIndex);
       console.log(this.state.display2.slice(-3, -2), /\d/.test(this.state.display2.slice(-3, -2)))
    }

    render () {
        return (
           <div id="calculator">
               <div id="alg-display">{this.state.display2}</div>
               <div id="display">{this.state.display1}</div>
               <div id="buttons">
                    <button onClick={this.showOnDisplay} value="1" className="number" id="one">1</button>
                    <button onClick={this.showOnDisplay} value="2" className="number" id="two">2</button>
                    <button onClick={this.showOnDisplay} value="3" className="number" id="three">3</button>
                    <button onClick={this.showOnDisplay} value="4" className="number" id="four">4</button>
                    <button onClick={this.showOnDisplay} value="5" className="number" id="five">5</button>
                    <button onClick={this.showOnDisplay} value="6" className="number" id="six">6</button>
                    <button onClick={this.showOnDisplay} value="7" className="number" id="seven">7</button>
                    <button onClick={this.showOnDisplay} value="8" className="number" id="eight">8</button>
                    <button onClick={this.showOnDisplay} value="9" className="number" id="nine">9</button>
                    <button onClick={this.showOnDisplay} value="0" className="number" id="zero">0</button>
                    <button onClick={this.showOnDisplay} value="+" className="action" id="add">+</button>
                    <button onClick={this.showOnDisplay} value="-" className="action" id="subtract">-</button>
                    <button onClick={this.showOnDisplay} value="*" className="action" id="multiply">*</button>
                    <button onClick={this.showOnDisplay} value="/" className="action" id="divide">/</button>
                    <button onClick={this.showOnDisplay} value="." className="action" id="decimal">.</button>
                    <button onClick={this.clearDisplay} className="action" id="clear">AC</button>
                    <button onClick={this.getAnswer} className="action" id="equals">=</button>
               </div>
           </div>
        )
    }
}
export default Main;