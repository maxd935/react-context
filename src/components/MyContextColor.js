import React from 'react';


const obj = {color : "red", text:"MyContextColor CONTEXT Default", toggleColor: () => {}}
export const MyContextColor = React.createContext(obj);