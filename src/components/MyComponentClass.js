import React from 'react';

export class MyCardClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {objNames: {}, tabNames: []}
    this.testFunction = this.testFunction.bind(this);
  }

  testFunction (obj){
    console.log('testFunction');
    console.log({...this.state.objNames});
    if (true) {
      this.setState((state, props) => ({objNames: {...this.state.objNames, obj}}))
    }

    // this.setState({objNames: {...this.state.objNames, obj}})
    if (this.state.tabNames.length < 2) {
      this.setState({tabNames: [...this.state.tabNames, obj]})
    }
    
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');

    console.log(prevState.objNames);
    const obj = {name: 'max', ville: 'pan'}

    // Typical usage (don't forget to compare props):
    const log = this.state.objNames !== prevState.objNames
    console.log(log);
    if (log) {
      console.log(this.state.objNames);
      this.setState((state, props) => ({objNames: {...this.state.objNames, obj}}))
    }
  }

  render(){
    console.log('this.state.objNames');
    console.log(this.state.objNames);
    console.log('this.state.tabNames');
    console.log(this.state.tabNames);
    return (
      <div>
        <MyTitleClass handleSubmit={this.testFunction} />
        {/* {this.state.objNames} */}
      </div>
      )
  }
}

export class MyTitleClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {pers: {name: '', ville:''}};
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeVille = this.handleChangeVille.bind(this);
    this.handleChangePers = this.handleChangePers.bind(this);
  }

  handleChangeName(event) {
    this.setState({pers :{...this.state.pers, name: event.target.value}});
  }

  handleChangeVille(event) {
    this.setState({pers :{...this.state.pers, ville: event.target.value}});
  }

  handleChangePers(event) {
    this.props.handleSubmit(this.state.pers)
  }

  render(){
    return(
      <div>
        <h1>MyTitleClass {this.props.color}</h1>
          <label>
            Name:
            <input type="text" value={this.state.pers.name} onChange={this.handleChangeName} />
          </label>
          <label>
            Ville:
            <input type="text" value={this.state.pers.ville} onChange={this.handleChangeVille} />
          </label>
          <button onClick={this.handleChangePers}>
          Click me
        </button>
      </div>
    )
  }
}