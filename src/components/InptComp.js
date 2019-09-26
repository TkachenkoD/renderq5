import React, { Component } from "react";

export default class InptComp extends Component {

    render(){
        let {pasp, typeofinpt} = this.props; 
        console.log(this.props);
  return (


    <div className="input-group leftSide-inpt">
    <div className="input-group-prepend">
      <div className="input-group-text bg-primary text-white">
     
      </div>
    </div>
    <input
    //   value={dataFromValue}
    //   onChange={handleChangeFnc}
      ref="_inpInfo"
      type={typeofinpt}
      className="form-control"
      placeholder= {pasp}
    />
  </div>
   
  );
}
} 