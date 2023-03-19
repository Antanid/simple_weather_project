import React from "react";
import SunImg from "../assets/sun.svg";

const InputSearch = ({inputChange, inputCity, onSearchButt}) => {
  return (
    <div className="search_city">
      <img src={SunImg} alt="sunImg" />
      <input onChange={inputChange} placeholder="Type your city..." value={inputCity} />
      <button
       onClick={() => onSearchButt()}>Search</button>
    </div>
  );
};

export default InputSearch;
