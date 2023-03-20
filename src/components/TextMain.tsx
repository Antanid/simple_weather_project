import React from "react";

type TextProps = {
  text : string
}

const TextMain: React.FC <TextProps> = ({text}) => {
  return (
    <div className="main_text">
      <h1>{text}</h1>
    </div>
  );
};

export default TextMain;
