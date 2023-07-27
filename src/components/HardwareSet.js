import React from "react";

const HardwareSet = ({set}) => {
    return(
    <div className="hwset">
          <p>{set.Capacity}</p>
          <p>CAPACITY</p>
          <p>{set.Available}</p>
          <p>AVAILABILITY</p>
    </div>
    );
}

export default HardwareSet