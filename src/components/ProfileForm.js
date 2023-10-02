import React from "react";
import "./CatalogForm.css";

const ProfileForm = () => {
  return (
    <form className="form">
      {/* Título del formulario */}
      <h2>Actualizar Perfiles</h2>
      <div className="form-group">
        {/* Etiqueta para el campo "Nombre" */}
        <label htmlFor="profileName">Nombre:</label>
        {/* Campo de entrada de texto para el nombre del perfil */}
        <input
          type="text"
          id="profileName"
          name="profileName"
          required
          readOnly // El campo de entrada es de solo lectura
        />
      </div>
      <div className="form-group">
        {/* Etiqueta para el campo "Descripción" */}
        <label htmlFor="profileDescription">Descripción:</label>
        {/* Campo de entrada de texto para la descripción del perfil */}
        <input
          type="text"
          id="profileDescription"
          name="profileDescription"
          required
          readOnly // El campo de entrada es de solo lectura
        />
      </div>
      <div className="button-group">
        {/* Botón para "Agregar" */}
        <button
          type="button"
          className="primary-button short-button"
          id="newProfile-btn"
        >
          Agregar
        </button>
        {/* Botón para "Modificar" */}
        <button
          type="button"
          className="primary-button short-button"
          id="modifyProfile-btn"
        >
          Modificar
        </button>
        {/* Botón para "Buscar" */}
        <button
          type="button"
          className="primary-button short-button"
          id="findProfile-btn"
        >
          Buscar
        </button>
        {/* Botón para "Cancelar" */}
        <button
          type="button"
          className="primary-button short-button"
          id="cancelProfile-btn"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
