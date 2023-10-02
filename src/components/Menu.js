import React from "react";
import Card from "./Card"; // Importa el componente Card
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Menu.css"; // Importa los estilos CSS para este componente
import {
  faIdBadge,
  faIdCard,
  faUserCheck,
  faIndustry,
  faUserTie,
  faRegistered,
  faRulerCombined,
  faPaintbrush,
  faCircleCheck,
  faFileShield,
} from "@fortawesome/free-solid-svg-icons";

// Definición del componente Menu
const Menu = ({ onCardClick }) => {
  // Función para manejar el clic de la tarjeta
  const handleCardClick = (link) => {
    if (onCardClick) {
      onCardClick(link);
    }
  };
  // Datos para cada tarjeta
  const cardsData = [
    {
      icon: faIdBadge,
      title: "Actualizar Perfiles",
      description: "Actualizar información de Perfiles de Empleados",
      link: "/profile",
    },
    {
      icon: faIdCard,
      title: "Actualizar Empleados",
      description: "Actualizar información de empleados",
      link: "/employee",
    },
    {
      icon: faUserCheck,
      title: "Asignar Permisos",
      description: "Asignar permisos a perfiles de empleados",
      link: "permisos.html",
    },
    {
      icon: faIndustry,
      title: "Empresa",
      description: "Actualizar la información de la Empresa",
      link: "empresa.html",
    },
  ];

  const cardsData2 = [
    {
      icon: faUserTie,
      title: "Clientes",
      description: "Actualizar la información de los Clientes",
      link: "clientes.html",
    },
    {
      icon: faRegistered,
      title: "Marcas",
      description: "Actualizar Marcas de Llantas",
      link: "marcas.html",
    },
    {
      icon: faRulerCombined,
      title: "Dimensiones",
      description: "Actualizar Dimensiones de Llantas",
      link: "dimensiones.html",
    },
    {
      icon: faPaintbrush,
      title: "Diseños",
      description: "Actualizar Diseños de Llantas",
      link: "disenios.html",
    },
    {
      icon: faCircleCheck,
      title: "Resolución Inspección",
      description: "Actualizar Resoluciones de Inspección",
      link: "resolinspec.html",
    },
    {
      icon: faFileShield,
      title: "Resolución Garantías",
      description: "Actualizar Resoluciones de Garantías",
      link: "resolgarantia.html",
    },
  ];

  return (
    <div className="menu-container">
      <header>
        <h2>Administración</h2>
      </header>
      <section className="section-administracion">
        {/* Mapea los datos de las tarjetas para renderizarlas */}
        {cardsData.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            link={card.link}
            onClick={() => handleCardClick(card.link)}
          />
        ))}
      </section>
      <h2>Producción</h2>
      <section className="section-produccion">
        {/* Mapea los datos de las tarjetas sección de producción para renderizarlas */}
        {cardsData2.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            link={card.link}
            onClick={() => handleCardClick(card.link)}
          />
        ))}
      </section>
    </div>
  );
};

export default Menu;
