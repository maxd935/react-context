import React from 'react';
import {MyContextColor} from './MyContextColor'


export class MyTitleClassContext extends React.Component {
  // Methode 2
  static contextType = MyContextColor;
    render(){
      let context = this.context;
      return(
        <div style={{backgroundColor: context.color}}>
          <h1>MyTitleClassContext {context.color}</h1>
          <h2>{context.text}</h2>
          <label for="favcolor">Select your favorite color:</label>
          <input type="color" id="favcolor" name="favcolor" value={context.color} onChange={context.toggleColor} />
        </div>
      )
    }
  }

  // MyTitleClassContext.contextType = MyContextColor;
