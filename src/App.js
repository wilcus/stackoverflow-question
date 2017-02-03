import React, { Component } from 'react';

const Select = ({ options=[], keyOfName, placeholderMessage, defaultValue="-1" }) => {
  return (
    <select required defaultValue={defaultValue}>
      <option disabled value="-1">{placeholderMessage}</option>
      {
        options.map(function (option, index) {
          return (
            <option key={index} value={index}>
              {option}
            </option>
          );
        })
      }
    </select>
  )
}

class Bug extends Component {
  constructor(){
    super();
    this.state = {index: 0}
    let self = this;
    setTimeout(()=>{
      console.log("before setState :" + this.state.index);
      self.setState({index: 1});
      console.log("after setState :" + this.state.index);
    }, 2000);
  }

  render(){
    return (
      <Select
        options={this.props.options}
        defaultValue={this.props.options ? this.state.index : -1}
        placeholderMessage="Seleccione una Cuenta"
      />
    )
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = {options: []};
    let self = this;
    setTimeout(()=>{self.setState({options: ["ji", "xo"]})}, 2000);
  }

  render() {
    return (
      <div>
        <Bug options={this.state.options}/>
      </div>
    );
  }
}

export default App;
