import React, { Component } from "react";
import InptComp from './InptComp.js';

export default class LeftSide extends Component {
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
  state = {
      placeholders: ['first name', 'last name', 'e-mail', 'phone']
  }

  render() {
    // const { passedSingleStr } = this.props;
    const { handleChangeFnc } = this.props;
    const { dataFromValue } = this.props;
    const { passedEditBtn } = this.props;
    // _inpInfo.value = passedSingleStr;
    // _inpInfo.value = passedSingleStr[0];
    // console.log("passedSingleStr", passedSingleStr);

    return (
      <div className="leftSide-form-container">
          <div className="info1 notation">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rho </div>
        <form onSubmit={this.getInfoForm}>
        {
            this.state.placeholders.map((item, ind)=>{
              return(
                <InptComp key={ind} pasp = {item} typeofinpt="text" />
            )
          })
        }
          <div className="input-group leftSide-inpt">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book" />
              </div>
            </div>
            <label class="containerRad">prefere e-mail
                 <input type="radio" checked="checked" name="radio"></input>
                 <span class="checkmark"></span>
             </label>
            <label class="containerRad">prefere phone
                 <input type="radio" checked="checked" name="radio"></input>
                 <span class="checkmark"></span>
             </label>
          </div>
          
          {/* <InptComp pasp = "asdqwe"></InptComp> */}
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