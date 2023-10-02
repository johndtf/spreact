import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Definición del componente Card
const Card = ({ icon, title, description, link }) => {
  return (
    <div className="card">
      {/* Icono de la tarjeta utilizando FontAwesome */}
      <FontAwesomeIcon icon={icon} size="3x" />
      {/* Título de la tarjeta */}
      <h3>{title}</h3>
      {/* Descripción de la funcionalidad de la tarjeta */}
      <p>{description}</p>
      {/* Enlace para redirigir a la sección correspondiente */}
      <a href={link}>Ir a {title}</a>
    </div>
  );
};

export default Card;

