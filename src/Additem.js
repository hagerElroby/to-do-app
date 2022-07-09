import React ,{ Component} from "react";
class Additem extends  Component{
      state={
            name:'',
            age:''
      }
      handelchange = (e)=>{
            this.setState({
                  [e.target.id] : e.target.value
            })
      }
      handelsubmit=(e)=>{
            e.preventDefault();
            if(e.target.name.value===''){
                  return false
            }else{
                  this.props.additem(this.state)
                  this.setState({
                      name:'',
                      age:''
                  })
            }
           
      }
      render(){
            return(
                  <div>
                        <form onSubmit={this.handelsubmit}>
                              <input type="text" placeholder="Enter your task...." id="name" onChange={this.handelchange} value={this.state.name}/>
                              <input type="number" placeholder="Enter specific time...." id="age" onChange={this.handelchange} value={this.state.age}/>
                              <input className="sub" type="submit" value="Add" />
                        </form>
                  </div>
            )
      }
}

export default Additem;