import React from "react";
import SunImg from "../assets/sun.svg";

type InputSearchProps = {
  inputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputCity: string;
  onSearchKey: (e: React.KeyboardEvent<HTMLElement>) => void;
  onSearchButt: () => void;
};

const InputSearch: React.FC<InputSearchProps> = ({
  inputChange,
  inputCity,
  onSearchButt,
  onSearchKey,
}) => {
  return (
    <div className="search_city">
      <img src={SunImg} alt="sunImg" />
      <input onKeyDown={onSearchKey} onChange={inputChange} placeholder="Type your city..." value={inputCity} />
      <button onClick={onSearchButt}>
        Search
      </button>
    </div>
  );
};

export default InputSearch;
