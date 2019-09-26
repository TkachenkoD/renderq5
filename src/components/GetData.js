import React, { Component } from "react";
import LeftSide from "./LeftSide.js";
import RightSide from "./RightSide.js";


export default class GetData extends Component {
  state = {
    
  };

    render() {
    // const { id, img, title_name, name_descripton, info1, lease_info, lease_detail } = this.props.pasProp;


    return (
    
    <article className="container article" style={{ marginTop: "6%", marginBottom: "6%"}}>  
      
       <LeftSide></LeftSide>
       <RightSide></RightSide>
      </article>
      
    );
  }
}