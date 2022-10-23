import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import vehiculoService from "../services/vehiculoService";
import personaService from "../services/personaService";
import alquilerService from "../services/alquilerService";

const AlquilerUpdate = props => {
    const { id_Alquiler } = useParams();



    const [personas, setPersonas] = useState([]);
    const [persona, setPersona] = useState(null);
    const [vehiculos, setVehiculos] = useState([]);
    const [vehiculo, setVehiculo] = useState(null);
    const [fecha, setFecha] = useState("");



    const updateVehiculo = () => {
        var data = { id_Alquiler:id_Alquiler,personas: persona, vehiculos: vehiculo, fecha: fecha };
        if(data.personas != null && data.vehiculos !=null){
        alquilerService.update(id_Alquiler, data)
            .then(response => {
                console.log(response.data);
                alert("Se Modifico correctamente");
            })
            .catch(e => {
                console.log(e);
            });
        }else{
            if(data.personas == null && data.vehiculos != null){
                alert("Seleccione una Persona");
               }else if(data.vehiculos == null && data.personas != null){
                alert("Seleccione un Vehiculo");
               }else{
                alert("Seleccione una Persona Y un Vehiculo");
               }
        }
    };

    useEffect(() => {
        retrievePersonas();
        retrieveVehiculo();
    }, []);
    const retrievePersonas = () => {
        personaService.getAll()
            .then(response => {
                setPersonas(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };


    const retrieveVehiculo = () => {
        vehiculoService.getAll()
            .then(response => {
                setVehiculos(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };



    return (
        <div className="card">

            <div>

                <div className="card-header">
                    Update Vehiculos
                </div>

                <div className="card-body">
                    <form onSubmit={
                        updateVehiculo
                        }>
                            <div className="form-group">
                            <label htmlFor="">Id : {id_Alquiler}</label>
                            
                        </div>
                        <div className="form-group">
                            <div className="form-group">

                                <select id="persona" name="persona" onChange={e => {setPersona(
                                
                                 JSON.parse(e.target.value)
                                 )
                                 console.log(JSON.parse(e.target.value));
                                 }}>
                                      <option selected>Seleccione una Persona</option>
                                    {personas && personas.map(
                                        (personas) => (
                                            <option value={JSON.stringify(personas)}> {personas.identificacion} </option>
                                        )

                                    )}


                                </select>


                            </div>
                            <small id="helpId" className="text-muted">Seleccione la Identificacion de la Persona</small>
                        </div>

                        <div className="form-group">
                            <div className="form-group">

                                <select id="vehiculo" name="vehiculo" onChange={e => {setVehiculo(
                                
                                 JSON.parse(e.target.value)
                                 )
                                 console.log(JSON.parse(e.target.value));
                                 }}>
                                    <option selected>Seleccione un Vehiculo</option>
                                    {vehiculos && vehiculos.map(
                                        (vehiculos) => (
                                            <option value={JSON.stringify(vehiculos)}> {vehiculos.placa} </option>
                                        )

                                    )}


                                </select>


                            </div>
                            <small id="helpId" className="text-muted">Seleccione la Placa del Vehiculo</small>
                        </div>

                       

                        <div className="form-group">
                            <label htmlFor="">Fecha :</label>
                            <input type="date" className="form-control" id="fecha" required value={fecha} onChange={e => { setFecha(e.target.value) }} name="fecha" />
                            <small id="helpId" className="text-muted">Seleccione la fecha</small>
                        </div>


                        <div className="btn-group" role="group" aria-label="">
                            <button type="submit" className="btn btn-success">Editar</button>
                            <Link to="/AlquilerList" className="btn btn-warning">Cancelar</Link>
                        </div>

                    </form>
                </div>





               
            </div>

            <div className="card-footer text-muted">

            </div>

        </div>


    );
};
export default AlquilerUpdate;