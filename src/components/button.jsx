import React, { useRef } from "react";
import "../styleComponents/button.css"

const Button = ({ btn_text, icon, fun }) => {
  return (
      <button onClick={fun} className="btnn animated-button">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {btn_text} {icon}
      </button>
    );
}

export default Button;