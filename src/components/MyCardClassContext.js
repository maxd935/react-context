import React from 'react';
import {MyTitleClassContext} from './MyTitleClassContext'
import {MyContextColor} from './MyContextColor'


export class MyCardClassContext extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: '#ff0000', text:'TEST CONTEXT provider'};

    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
  }

  handleChangeColor(event) {
    this.setState({color: event.target.value});
  }

  handleChangeText(event) {
    this.setState({text: event.target.value});
  }

  // Methode 2
  // static contextType = MyContextColor;

  render(){
    let value = this.context;
    const obj = {color : this.state.color, text: this.state.text, toggleColor: this.handleChangeColor }
    return (
      <div>
        <MyContextColor.Provider value={obj}>
          <div style={{backgroundColor: value.color}}>
              <MyTitleClassContext />
              {value.text}
          </div>
        </ MyContextColor.Provider>
        <label for="favcolor">Select your favorite color:</label>
        <input type="color" id="favcolor" name="favcolor" value={this.state.color} onChange={this.handleChangeColor} />
        <label for="text">Enter your text:</label>
        <input type="text" id="text" name="text" value={this.state.text} onChange={this.handleChangeText} />
      </div>
    )
  }
}

// Methode 1
MyCardClassContext.contextType = MyContextColor;
