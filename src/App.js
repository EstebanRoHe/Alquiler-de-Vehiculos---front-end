import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import PersonaList from "./componentesPersona/PersonaList";
import PersonaCreate from './componentesPersona/PersonaCreate';
import PersonaUpdate from './componentesPersona/PersonaUpdate';
import Tipo_VehiculoList from './componentesTipo_Vehiculo/Tipo_VehiculoList';
import Tipo_VehiculoCreate from './componentesTipo_Vehiculo/Tipo_VehiculoCreate';
import Tipo_VehiculoUpdate from './componentesTipo_Vehiculo/Tipo_VehiculoUpdate';
import VehiculoList from './componentesVehiculo/VehiculoList';
import VehiculoCreate from './componentesVehiculo/VehiculoCreate';
import VehiculoUpdate from './componentesVehiculo/VehiculoUpdate';
import AlquilerList from './componentesAlquiler/AlquilerList';
import AlquilerCreate from './componentesAlquiler/AlquilerCreate';
import AlquilerUpdate from './componentesAlquiler/AlquilerUpdate';
import LogList from './componentesLog/LogList';
function App() {

    return (<div>
      
      <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="nav navbar-nav">

                <Link className="nav-item nav-link active" to={"PersonaList"}>Personas</Link>
                <Link className="nav-item nav-link active" to={"Tipo_VehiculoList"}>Tipo De Vehiculos</Link>
                <Link className="nav-item nav-link active" to={"VehiculoList"}>Vehiculos</Link>
                <Link className="nav-item nav-link active" to={"AlquilerList"}>Alquilar</Link>
                <Link className="nav-item nav-link active" to={"LogList"}>Logs</Link>
              
            </div>
        </nav>
     
      <div className="container mt-3">
    
          <Routes>
          <Route index element={<PersonaList/>}/>
          <Route path='/PersonaList' element={<PersonaList></PersonaList>}> </Route>
          <Route path='/PersonaCreate' element={<PersonaCreate></PersonaCreate>}> </Route>
          <Route path='/PersonaUpdate/:id_persona' element={<PersonaUpdate></PersonaUpdate>}> </Route>
          <Route path='/Tipo_VehiculoList' element={<Tipo_VehiculoList></Tipo_VehiculoList>}> </Route>
          <Route path='/Tipo_VehiculoCreate' element={<Tipo_VehiculoCreate></Tipo_VehiculoCreate>}> </Route>
          <Route path='/Tipo_VehiculoUpdate/:id_Tipo_Vehiculo' element={<Tipo_VehiculoUpdate></Tipo_VehiculoUpdate>}> </Route>
          <Route path='/VehiculoList' element={<VehiculoList></VehiculoList>}> </Route>
          <Route path='/VehiculoCreate' element={<VehiculoCreate></VehiculoCreate>}> </Route>
          <Route path='/VehiculoUpdate/:id_Vehiculo' element={<VehiculoUpdate></VehiculoUpdate>}> </Route>
          <Route path='/AlquilerList' element={<AlquilerList></AlquilerList>}> </Route>
          <Route path='/AlquilerCreate' element={<AlquilerCreate></AlquilerCreate>}> </Route>
          <Route path='/AlquilerUpdate/:id_Alquiler' element={<AlquilerUpdate></AlquilerUpdate>}> </Route>
          <Route path='/LogList' element={<LogList></LogList>}> </Route>

          </Routes>
      </div>
  </div>
  );
}

export default App;




