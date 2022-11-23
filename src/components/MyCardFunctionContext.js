import React, { useState } from 'react';
import {MyTitleFunctionContext} from './MyTitleFunctionContext'
import {MyContextColor} from './MyContextColor'


export function MyCardFunctionContext() {
  const [color, setColor] = useState('#ff0000')
  const [text, setText] = useState('TEST CONTEXT provider')

  function handleChangeColor(event) {
    setColor(event.target.value)
  }

  function handleChangeText(event) {
    setText(event.target.value)
  }
  const obj = {color : color, text: text, toggleColor: handleChangeColor }


    return (
      <div>
        <MyContextColor.Provider value={obj}>
          <div>
              <MyTitleFunctionContext />
          </div>
        </ MyContextColor.Provider>
        <label for="favcolor">Select your favorite color:</label>
        <input type="color" id="favcolor" name="favcolor" value={color} onChange={handleChangeColor} />
        <label for="text">Enter your text:</label>
        <input type="text" id="text" name="text" value={text} onChange={handleChangeText} />
      </div>
    )
}
