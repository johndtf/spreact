//Importar las bibliotecas y componentes necesarios.
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import ProfileForm from "./components/ProfileForm";
import EmployeeForm from "./components/EmployeeForm";

//Creación del componente principal App.
function App() {
  const [showMenu, setShowMenu] = useState(true);
// Utilizamos el hook useState para gestionar el estado de showMenu, 
//que determina si se muestra el menú o el formulario.
  return (
    <Router>
      {/* Dentro del componente Router, definimos las rutas y 
      los componentes que se mostrarán en función del valor de showMenu */}
      <div className="App">
        <Routes>
          <Route path="/" element={showMenu ? <Menu /> : null} />
          <Route
            path="/profile"
            element={
              showMenu ? (
                <ProfileForm onBackClick={() => setShowMenu(true)} />
              ) : null
            }
          />
          <Route
            path="/employee"
            element={
              showMenu ? (
                <EmployeeForm onBackClick={() => setShowMenu(true)} />
              ) : null
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
