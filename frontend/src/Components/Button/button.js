import React from "react";

function Button({ text, onClick, variant = "primary", size = "md", disabled = false }) {
  return (
    <button 
      className={`btn btn-${variant} btn-${size}`} 
      onClick={onClick} 
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
