import React from "react";



export default function LeaseInfo(props) {
   let {pasprop} = props; 
   let [name, obj] = pasprop; 
  return (


      <div className="lease-deatails">
        <p className = "lease-deatails-name">
          {name}
        </p>
        <p className = "lease-deatails-price-container"> 
       $<span className="lease-deatails-price"> {obj.price }</span> <span> {(obj.price_float != null)? (obj.price_float):"" }</span> Mo. Lease
        </p>

        <p className = "lease-details-string">
          <span>{obj.due_at_signing} Due at Signing </span>
          <span>{(obj.deposit != null)? (` | ${obj.deposit} Security Deposit `):""}</span>

        </p>
      </div>
   
  );
} 