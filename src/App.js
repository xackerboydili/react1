import React from "react";

class App extends React.Component{
  render(){
    return (
      <div><div> {this.props.data.id} {this.props.data.name}</div>
      <h1>
        {this.props.children}
      </h1>
      </div>
      )
  }
}


export default App;
