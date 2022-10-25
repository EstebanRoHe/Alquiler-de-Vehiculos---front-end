import React, { useState, useEffect } from 'react';
import personaService from '../services/personaService';
import vehiculoService from '../services/vehiculoService';
import alquilerService from '../services/alquilerService';
import { Link } from 'react-router-dom';

const AlquilerCreate = () => {
   
    const [Alquiler, setAlquiler] = useState([]);
    const [personas, setPersonas] = useState([]);
    const [persona, setPersona] = useState(null);
    const [vehiculos, setVehiculos] = useState([]);
    const [vehiculo, setVehiculo] = useState(null);
    const [fecha, setFecha] = useState("");
    useEffect(() => {
        retrievePersonas();
        retrieveVehiculo();
        retrieveAlquiler();
    }, []);

    

    const retrieveAlquiler = () => {
        alquilerService.getAll()
            .then(response => {
                setAlquiler(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

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

    const saveAlquiler = () => {
        var data = { personas: persona, vehiculos: vehiculo, fecha: fecha };
        var validacionVehiculo = true;
        var validacionPersona = true;
        if (data.personas != null && data.vehiculos != null) {
            Alquiler.forEach(alquiler=>{
                if(alquiler.vehiculos.id_Vehiculo === data.vehiculos.id_Vehiculo){
                    validacionVehiculo=false;
                }

            })
            Alquiler.forEach(alquiler=>{
                if(alquiler.personas.id_persona === data.personas.id_persona && alquiler.fecha === data.fecha){
              
                    validacionPersona=false;
                }

            })
            if(!validacionVehiculo){
                alert("El Vehiculo ya esta Alquilado");
                }
                else if(!validacionPersona){
                    alert("Esta persona ya alquilo para esta fecha");
                }
                else{
                    alquilerService.create(data)
                    .then(response => {
                        console.log(
                            response.data);
                        alert("Se agrego correctamente");
                    })
                    .catch(e => {
                        console.log(e);
                    })
                }

        } else {
            if (data.personas == null && data.vehiculos != null) {
                alert("Seleccione una Persona");
            } else if (data.vehiculos == null && data.personas != null) {
                alert("Seleccione un Vehiculo");
            } else {
                alert("Seleccione una Persona Y un Vehiculo");
            }
        }
    };



    return (
        <div className="card">
            <div>
                <div className="card-header">
                    Agregar Un Alquiler Nuevo
                </div>
                <div className="card-body">
                    <form onSubmit={
                        saveAlquiler
                    }>
                        <div className="form-group">
                            <div className="form-group">

                                <select id="persona" name="persona" onChange={e => {
                                    setPersona(

                                        JSON.parse(e.target.value)
                                    )
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

                                <select id="vehiculo" name="vehiculo" onChange={e => {
                                    setVehiculo(

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
                            <button type="submit" className="btn btn-success">Agregar Un Alquiler Nuevo</button>
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

export default AlquilerCreate;
