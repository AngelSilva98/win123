import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Landing from "./Views/Landing/Landing";
import Register from "./Components/Register/Register";
import Login from "./Components/login/Login";
import Home from "./Views/HomeUser/Home";
import HomeAdmin from "./Views/HomeAdmin/HomeAdmin";
import HomeSubAdmin from "./Views/HomeSubAdmin/HomeSubAdmin";
import CargaPuntosUser from "./Components/CargarPuntosUser/CargaPuntosUser";
import GanadoresCarrera from "./Components/GanadoresCarrera/GanadoresCarrera";
import CustomModal from "./Components/RecuperarContraseña/CustomModal";
import ActualizarPerfilUsuario from "./Components/ActualizarPerfilUsuario/ActualizarPerfilUsuario";
import RetirarPuntos from "./Components/RetirarPuntos/RetirarPuntos";
import { useSelector } from "react-redux";
axios.defaults.baseURL = "https://win123.onrender.com/";
//axios.defaults.baseURL = "http://localhost:3001/";
function App() {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/actualizarperfil/:username"
          element={<ActualizarPerfilUsuario />}
        />
        <Route path="/CustomModal" element={<CustomModal />} />
        <Route path="/GanadoresCarrera" element={<GanadoresCarrera />} />
        <Route path={`/homeadmin/:username`} element={<HomeAdmin />} />
        {/* <Route path="/homeadmin/" element={<HomeAdmin  />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/cargapuntos/:id"
          element={user.admin || user.subadmin ? <CargaPuntosUser /> : <Home />}
        />
        <Route path="/home/subadmin/:username" element={<HomeSubAdmin />} />
        <Route
          path="/home/subadmin/retirarpuntos/:id/:idSubAdmin"
          element={<RetirarPuntos user={user} />}
        />
      </Routes>
    </div>
  );
}

export default App;
