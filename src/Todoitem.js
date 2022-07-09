import React from "react";
const Todoitem =(props) =>{
      const {items , deleteitem}=props;
      let length=items.length;
      const Listitems= length ?(
            items.map(item =>{
                  return(
                        <div key={ item.id}>
                              <span className=" name">{item.name}</span>
                              <span className=" age">{item.age}</span>
                              <span  className="action icon" onClick={() =>deleteitem(item.id)} className="icon">&times;</span>
                        </div>
                  )
            })

      ):(
        <p>There is no items</p>
      )
 
      return(
            <div className="listitem">
                  <div>
                        <span className="title name" >Task </span>
                        <span  className="title age">Time </span>
                        <span className="title action" >Action</span>
                  </div>
                 {Listitems}
            </div>
      )
}
export default Todoitem;