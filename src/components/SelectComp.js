import React, { Component } from "react";

export default class SelectComp extends Component {

    render(){
     
        let {pasp, typeofinpt} = this.props; 
        console.log(this.props);
  return (
    
    <div>
    <select className = "select-rSide" name={pasp}>
        <option value="1">{pasp}</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    
    </div>
      
   
  );
}
} 