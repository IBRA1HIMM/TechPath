import React from "react";

export default function Card({headLine,subLine,image}) {
  return (
    <div className="card">
      <div>
        <img src={`./Images/${image}.png`} alt="" />
      </div>
      <h2>{headLine}</h2>
      <p>{subLine}</p>
    </div>
  );
}
