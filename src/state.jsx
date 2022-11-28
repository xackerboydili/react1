import React from "react";

class State extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      count: 0,
      title: 'hi'
    }

  }


  render(){
    
    const plus = () => {
      if(this.state.count < 10)this.setState({count : this.state.count + 1})}

    const minus = () => {
      if(this.state.count > 1)this.setState({count : this.state.count - 1})}
    
    const onChange = (event) => {
      console.log(event.target.value);
      this.setState({title: event.target.value});
    }
    return(
      <div>
        <input onChange={onChange} type="text" placeholder="your list"/>
        <h1>{this.state.title}</h1>
        <h1>State {this.state.count}</h1>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
      </div>
    )
  }
}
export default State;