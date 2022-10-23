import React, { useState, useEffect } from "react";
import vehiculoService from '../services/vehiculoService';
import { Link,useNavigate } from 'react-router-dom';

const VehiculoList = () => {
    const [Vehiculo, setVehiculo] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        retrieveVehiculo();

    }, []);


    const retrieveVehiculo= () => {
        vehiculoService.getAll()
            .then(response => {
                setVehiculo(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const eliminar = (id_Vehiculo) => {
        vehiculoService.remove(id_Vehiculo)
            .then(response => {
                console.log(response.data);
                alert("Se Elimino correctamente");
                navigate(retrieveVehiculo());

            });
    }

    return (

        <div className="card">
            <div className="card-header">
                <Link className="btn btn-success" to={"/VehiculoCreate"}>Agregar Un Vehiculo Nuevo</Link>
            </div>
            <div className="card-body">
                <h2> Lista de Vehiculos </h2>
                <table className="table">

                    <thead>

                        <tr>
                            <th>ID</th>
                            <th>Placa</th>
                            <th>Tipo de Vehiculo</th>
                        </tr>
                    </thead>
                    {Vehiculo ? (
                        <tbody>
                            {Vehiculo && Vehiculo.map(
                                (Vehiculo) => (

                                    <tr key={Vehiculo.id_Vehiculo}>
                                        <td>{Vehiculo.id_Vehiculo}</td>
                                        <td>{Vehiculo.placa}</td>
                                        <td>{Vehiculo.tipo_vehiculo.descripsion}</td>
                                        

                                        <td><div className="btn-group" role="group" aria-label="">
                                            <Link className="btn btn-warning" to={"/VehiculoUpdate/" + Vehiculo.id_Vehiculo}>Editar</Link>
                                            <button className="btn btn-danger" onClick={() => 
                                            eliminar(Vehiculo.id_Vehiculo)}
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
export default VehiculoList;