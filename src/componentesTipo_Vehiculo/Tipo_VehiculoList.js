import React, { useState, useEffect } from "react";
import Tipo_VehiculoDataService from '../services/tipo_VehiculoService';
import { Link, useParams, useNavigate } from 'react-router-dom';

const Tipo_VehiculoList = () => {
    const [Tipo_Vehiculo, setTipo_Vehiculo] = useState([]);
    let navigate = useNavigate();


    useEffect(() => {
        ListarTipo_Vehiculo();

    }, []);


    const ListarTipo_Vehiculo = () => {
        Tipo_VehiculoDataService.getAll()
            .then(response => {
                setTipo_Vehiculo(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const eliminar = (id_Tipo_Vehiculo) => {
        Tipo_VehiculoDataService.remove(id_Tipo_Vehiculo)
            .then(response => {
                console.log(response.data);
                alert("Se Elimino correctamente");
                navigate(ListarTipo_Vehiculo());

            });
    }

    return (

        <div className="card">
            <div className="card-header">
                <Link className="btn btn-success" to={"/Tipo_VehiculoCreate"}>Agregar un Tipo De Vehiculo</Link>
            </div>
            <div className="card-body">
                <h2> Lista de Tipo de Vehiculo</h2>
                <table className="table">

                    <thead>

                        <tr>
                            <th>Id del Tipo del Vehiculo</th>
                            <th>Descripsion</th>
                           
                        </tr>
                    </thead>
                    {Tipo_Vehiculo ? (
                        <tbody>
                            {Tipo_Vehiculo && Tipo_Vehiculo.map(
                                (Tipo_Vehiculo) => (

                                    <tr key={Tipo_Vehiculo.id_Tipo_Vehiculo}>
                                        <td>{Tipo_Vehiculo.id_Tipo_Vehiculo}</td>
                                        <td>{Tipo_Vehiculo.descripsion}</td>
                                     

                                        <td><div className="btn-group" role="group" aria-label="">
                                            <Link className="btn btn-warning" to={"/Tipo_VehiculoUpdate/"+Tipo_Vehiculo.id_Tipo_Vehiculo}>Editar</Link>
                                            <button className="btn btn-danger" onClick={() => eliminar(Tipo_Vehiculo.id_Tipo_Vehiculo)}
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
export default Tipo_VehiculoList;