import React, {Component} from 'react';
import CarInfo from './CarInfo.js';
import { info } from "../info.js"
export default class Car extends Component {
  state = {
    info: info
  };
    render() {
      const [as] = this.state.info;
      return (
              <div >
                {/* title */}
  
                <div>
                  <div >
                    <h1>{as.name}</h1>
                  </div>
                </div>
               {/* end title */}
  
             
                  {/* product info */}
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