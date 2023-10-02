import React from "react";

// Definición del componente Button
const Button = ({ text, onClick }) => {
  return (
    <button className="primary-button short-button" onClick={onClick}>
      {/* Texto del botón, proporcionado como un prop */}
      {text}
    </button>
  );
};

export default Button;
