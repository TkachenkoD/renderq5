import React from "react";



export default function LeaseDetails(props) {
   let {pasprop} = props; 
   let [name, price] = pasprop; 
   console.log(props);
  return (


      <div className="cont-blue">
        <span>
         {name}
        </span>
        <span>
           {price}
        </span>
     
      </div>
   
  );
} 