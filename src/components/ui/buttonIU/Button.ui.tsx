import React from "react";
import "./buttonUI.css";
interface ButtonUiProps {
  callback: () => void;
  text: string;
}

const ButtonUi: React.FC<ButtonUiProps> = ({ callback, text }) => {
  return (
    <button
      className="buttonUI"
      onClick={() => {
        callback();
      }}
    >
      {text}
    </button>
  );
};

export default ButtonUi;
