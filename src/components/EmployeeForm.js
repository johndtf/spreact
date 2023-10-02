import React from "react";
import "./CatalogForm.css";
import "./EmployeeForm.css";

const EmployeeForm = () => {
  return (
    <form className="form">
      {/* Título del formulario */}
      <h2>Actualizar Empleados</h2>
      <div class="form-group">
        {/* Etiqueta para el campo "Nombres" */}
        <label for="usernames">Nombres:</label>
        {/* Campo de entrada de texto para los nombres del empleado */}
        <input type="text" id="usernames" name="usernames" required readonly />
      </div>
      <div class="form-group">
        {/* Etiqueta para el campo "Apellidos" */}
        <label for="userlastnames">Apellidos:</label>
        {/* Campo de entrada de texto para los apellidos del empleado */}
        <input
          type="text"
          id="userlastnames"
          name="userlastnames"
          required
          readonly
        />
      </div>
      <div class="form-group">
        {/* Etiqueta para el campo "Cédula/Nit" */}
        <label for="userid">Cédula/Nit:</label>
        {/* Campo de entrada de texto para la cédula/NIT del empleado */}
        <input type="text" id="userid" name="userid" required readonly />
      </div>

      <div class="form-group">
        {/* Etiqueta para el campo "Correo electrónico" */}
        <label for="email">Correo electrónico:</label>
        {/* Campo de entrada de texto para el correo electrónico del empleado */}
        <input type="text" id="email" name="email" required readonly />
      </div>

      <div class="form-group">
        {/* Etiqueta para el campo "Teléfono" */}
        <label for="telefono">Teléfono:</label>
        {/* Campo de entrada de texto para el teléfono del empleado */}
        <input type="text" id="telefono" name="telefono" required readonly />
      </div>
      <div class="form-group">
        {/* Etiqueta para el campo "Dirección" */}
        <label for="direccion">Dirección:</label>
        {/* Campo de entrada de texto para la dirección del empleado */}
        <input type="text" id="direccion" name="direccion" required readonly />
      </div>
      <div class="form-group">
        {/* Etiqueta para el campo "Perfil" */}
        <label for="perfil">Perfil:</label>
        {/* Campo de entrada de texto para el perfil del empleado */}
        <input type="text" id="perfil" name="perfil" required readonly />
      </div>

      <div class="form-group">
        {/* Etiqueta para el campo "Usuario" */}
        <label for="login">Usuario:</label>
        {/* Campo de entrada de texto para el usuario del empleado */}
        <input type="text" id="login" name="login" required readonly />
      </div>
      <div class="form-group">
        {/* Etiqueta para el campo "Contraseña" */}
        <label for="password">Contraseña:</label>
        {/* Campo de entrada de texto para la contraseña del empleado */}
        <input
          type="password"
          id="password"
          name="password"
          required
          readonly
        />
      </div>

      <div class="form-group">
        {/* Etiqueta para el campo "Estado" */}
        <label for="state">Estado:</label>
        {/* Campo de entrada de texto para el estado del empleado */}
        <input type="text" id="state" name="state" required readonly />
      </div>
      <div className="button-group">
        {/* Botón para "Agregar" */}
        <button
          type="button"
          className="primary-button short-button"
          id="newEmployee-btn"
        >
          Agregar
        </button>
        {/* Botón para "Modificar" */}
        <button
          type="button"
          className="primary-button short-button"
          id="modifyEmployee-btn"
        >
          Modificar
        </button>
        {/* Botón para "Buscar" */}
        <button
          type="button"
          className="primary-button short-button"
          id="findEmployee-btn"
        >
          Buscar
        </button>
        {/* Botón para "Cancelar" */}
        <button
          type="button"
          className="primary-button short-button"
          id="cancelEmployee-btn"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default EmployeeForm;
