import React, { Component } from "react";
import InptComp from './InptComp.js';
import SelectComp from './SelectComp.js';

export default class RightSide extends Component {
  // get info from input and submit it
//   getInfoForm = event => {
//     event.preventDefault();
//     const { _inpInfo } = this.refs;

//     _inpInfo.value !== ""
//       ? this.props.passeFunc(_inpInfo.value)
//       : alert("need some text");

//     // this.props.passeFunc(_inpInfo.value);
//     // console.log(_inpInfo.value);
//   };

  //change input
  changeInnerText = event => {
    event.preventDefault();
    // this.props.passEditFnc("asd");
  };
  handleSelectChange = (event) => {
    this.setState({
      result: event.target.value
    },
    ()=> console.log(this.state.result)
    )
    
    
  }
  state = {
    result: '',
    selNames: ['model', 'year', 'from', 'to']
   
  
  };

  render() {
    // const { passedSingleStr } = this.props;
    const { handleChangeFnc } = this.props;
    const { dataFromValue } = this.props;
    const { passedEditBtn } = this.props;
    // _inpInfo.value = passedSingleStr;
    // _inpInfo.value = passedSingleStr[0];
    // console.log("passedSingleStr", passedSingleStr);

    return (
      <div className="rightSide-form-container">
          <h1 className="rightSide-form-title">CAN'T FIND WHAT YOU LOOKING FOR</h1>
          <div className="info1 notation"></div>
        <form onSubmit={this.getInfoForm}>
    
        {
            this.state.selNames.map((item, ind)=>{
              return(
                <SelectComp key={ind} pasp = {item}  />
            )
          })
        }
           <InptComp  pasp = "your remark" typeofinpt="text" />
          <button
            type="submit"
            className=""
          >Submit
          </button>
        </form>
      </div>
    );
  }
}