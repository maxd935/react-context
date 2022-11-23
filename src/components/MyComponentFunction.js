
export  function MyCardFunction(props) {
  return (
    <div style={{backgroundColor: props.color}}>
      <MyTitleFunction color={props.color} />
      {props.color}
    </div>
  );
}

export  function MyTitleFunction(props){
  return(
    <h1>MyTitleFunction {props.color}</h1>
  )
}