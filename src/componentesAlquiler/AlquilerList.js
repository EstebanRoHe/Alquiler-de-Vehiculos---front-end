import React, { useState, useEffect } from "react";
import alquilerService from '../services/alquilerService';
import { Link, useNavigate } from 'react-router-dom';

const AlquilerList = () => {
    const [Alquiler, setAlquiler] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
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

    const eliminar = (id_Alquiler) => {
        alquilerService.remove(id_Alquiler)
            .then(response => {
                console.log(response.data);
                alert("Se Elimino correctamente");
                navigate(retrieveAlquiler());

            });
    }

    return (

        <div className="card">
            <div className="card-header">
                <Link className="btn btn-success" to={"/AlquilerCreate"}>Agregar un Alquiler</Link>
            </div>
            <div className="card-body">
                <h2> Lista de Alquileres </h2>
                <table className="table">

                    <thead>

                        <tr>
                            <th>ID</th>
                            <th>Persona</th>
                            <th>Vehiculo</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                    {Alquiler ? (
                        <tbody>
                            {Alquiler && Alquiler.map(
                                (Alquiler) => (

                                    <tr key={Alquiler.id_Alquiler}>
                                        <td>{Alquiler.id_Alquiler}</td>
                                        <td>{Alquiler.personas.nombre}</td>
                                        <td>{Alquiler.vehiculos.placa}</td>
                                        <td>{Alquiler.fecha}</td>


                                        <td><div className="btn-group" role="group" aria-label="">
                                            <Link className="btn btn-warning" to={"/AlquilerUpdate/" + Alquiler.id_Alquiler}>Editar</Link>
                                            <button className="btn btn-danger" onClick={() =>
                                                eliminar(Alquiler.id_Alquiler)}
                                            >Eliminar</button>


                                        </div></td>
                                    </tr>

                                )
                            )}

                        </tbody>
                    ) : (

                        <tr>
                            <td>Cagando..</td>
                        </tr>

                    )}
                </table>
            </div>
            <div className="card-footer text-muted">

            </div>
        </div>

    );


};
export default AlquilerList;