import React from 'react';
import { Component } from 'react';
import Additem from './Additem';
import Todoitem from './Todoitem';
class App extends  Component {

  state={
    items:[
      {id:1,name:'Reading',age:20},
      {id:2,name:'Study',age:30},
      {id:3,name:'Training',age:60}
    ]
  }
  deleteitem=(id) =>{
    let items = this.state.items;
    let i=items.findIndex(item =>item.id===id)
    items.splice(i ,1)
    this.setState({items})
  }
  additem=(item) =>{
    item.id=Math.random();
    let items=this.state.items;
    items.push(item);
    this.setState({items})
  }
  render(){
  return (
   <div className="App cont">
      <h1 className="text-center">Todo List</h1>
      <Todoitem items={this.state.items} deleteitem={this.deleteitem}/>
      <Additem additem={this.additem}/>
    </div>
  
  );
}
}

export default App;
