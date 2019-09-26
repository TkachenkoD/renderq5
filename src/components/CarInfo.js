import React, { Component } from "react";
import LeaseInfo from "./LeaseInfo.js";
import LeaseDetails from "./LeaseDetails.js";


export default class CarInfo extends Component {
  state = {
    
  };

    render() {
    const { id, img, title_name, name_descripton, info1, lease_info, lease_detail } = this.props.pasProp;


    return (
    
<article className="container article" style={{ marginTop: "6%", marginBottom: "6%"}}>  
      {/* pic */}
      <div className="container-inner wtf" style={{backgroundImage:`url(${img})`}}>
         {/* <img className="contaner-img"  src={img} alt="PicCar" /> */}
     </div>
    {/* end pic */}
    {/* info */}
      <div className="container-inner">
        <div className = "container title">
          <div className="title-name">{title_name}</div>
          <div className="title-description">{name_descripton}</div>
        </div>
        <div className = "container title details">
        {
            Object.entries(lease_info).map(([nested, ind], i)=>{
              return(
                <LeaseInfo key={i} pasprop = {[nested,ind]} />
            )
          })
        }
        </div>
        <div className = "lease-details-string info1">
          {info1}
        </div>
      </div>
      {/* end info */}
       
      </article>
      
    );
  }
}