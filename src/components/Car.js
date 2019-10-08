import React, {Component} from 'react';
import CarInfo from './CarInfo.js';
import { info } from "../info.js"
export default class Car extends Component {
  state = {
    info: info
  };
    render() {
      const [elem1, elem2] = this.state.info;
      console.log(elem2);
      return (
              <div >
                {/* title */}
                    {/* <h1>{elem1.title_name}</h1> */}
               {/* end title */}
                <div>
                  {info.map(nestedObj =>{
                    return(
                      <CarInfo key={nestedObj.id} pasProp = {nestedObj} /> 
                    );
                  })
                  }
                </div>
                 
              </div>
            
      );
    }
  }