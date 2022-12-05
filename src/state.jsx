import { specialCharMap } from "@testing-library/user-event/dist/keyboard";
import React from "react";
import list from "./list"

class State extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'Lists',
      data: list,
      search: 'Id'
    }
  }

  render(){

    const onChange = (event) => {
      this.setState({[event.target.name] : event.target.value});
    };

    const onFilter = (e) =>{
      const {value} = e.target
      let result = list.filter((item) =>
       `${item[this.state.search]}`.toLowerCase().includes(value.toLowerCase()))
      this.setState({
        data: result
      })
    }

    const onDelete = (id) =>{
      let del = this.state.data.filter((value) => value.id !== id)
      this.setState({
        data: del
      })
    }

    const onAdd =()=>{
      let user = {
        id : this.state.id,
        name : this.state.name
      }
      this.setState({ data: [...this.state.data, user], name: '', id: '',})
      
    }
    const OnSelect = (e) => {
      this.setState({search: e.target.value})
    }
    return(
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.id}</h1>
        <input value={this.state.name} name="name" onChange={onChange} placeholder='name'  type="text"  />
        <input value={this.state.id} name="id" onChange={onChange} placeholder='id' type="text"  />
        <br />
        <button onClick={onAdd}>Add</button>
        <select onChange={OnSelect} name="" id="">
          <option value="id">ID</option>
          <option value="name">Name</option>
        </select>
        <input onChange={onFilter} type="text" name="" id="" />


        <table border={'1'} width={'50%'}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {
            this.state.data.length ?
            this.state.data.map(({id, name}) => {
              return (
                <tr>
                  <th>{id}</th>
                  <th>{name}</th>
                  <th><button onClick={()=>onDelete(id)}>delete</button></th>
                  <th><button>edit</button></th>
                </tr>
              )
            }) : <tr>
              <th colSpan={4}>
              <h1>NO DATA</h1>
              </th>
            </tr>
          }
            
          </tbody>
        </table>
      </div>
    )
  }
}

export default State;






