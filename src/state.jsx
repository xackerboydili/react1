import { specialCharMap } from "@testing-library/user-event/dist/keyboard";
import React from "react";
import {list} from "./list"

class State extends React.Component {
  constructor(state){
    super(state);
    this.state = {
      data: list,

    }   
  }
  render(){
    // const onChange = (e) => {
    //   this.setState({name : e.target.value})
    // }

    // const plus = () => {
    //   if(this.state.count < Infinity) this.setState({count: this.state.count + 1})
    // }

    const onFilter = (e) => {
      let result = list.filter((value) => value.name.includes(e.target.value))
      this.setState({
        data: result,
      })
    }
    return(
      // <div>
      //   {/* <input onChange={onChange} type="text" placeholder="" /> */}
      //   <h1>{this.state.count}</h1>

      //   <button onClick={plus}>+</button>
      // </div>
      <div>
        <input onChange={onFilter} type="text" placeholder="find" />
        {this.state.data.map(({id, name}) =>{
          return(
            <h1 key={id}>{id} {name}</h1>
          )
        })}
      </div>
      
    )
  }


}






export default State;