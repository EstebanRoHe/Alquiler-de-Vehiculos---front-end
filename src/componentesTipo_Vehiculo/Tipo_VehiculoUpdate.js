import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import Tipo_VehiculoDataService from "../services/tipo_VehiculoService";

const Tipo_VehiculoUpdate = props => {
    const { id_Tipo_Vehiculo } = useParams();


    const initialTipo_VehiculoState = {
        id_Tipo_Vehiculo: null,
        descripsion: ""

    };
    const [Tipo_Vehiculo, setTipo_Vehiculo] = useState(initialTipo_VehiculoState);

    const getTipo_Vehiculo = id_Tipo_Vehiculo => {
        Tipo_VehiculoDataService.get(id_Tipo_Vehiculo)
            .then(response => {
                setTipo_Vehiculo
                    (response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        if (id_Tipo_Vehiculo)
            getTipo_Vehiculo(id_Tipo_Vehiculo);
    }, [id_Tipo_Vehiculo]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setTipo_Vehiculo
            ({ ...Tipo_Vehiculo, [name]: value });
    };

    const updateTipo_Vehiculo = () => {
        Tipo_VehiculoDataService.update(Tipo_Vehiculo.id_Tipo_Vehiculo, Tipo_Vehiculo)
            .then(response => {
                console.log(response.data);
                alert("Se Modifico correctamente");
            })
            .catch(e => {
                console.log(e);
            });
    };



    return (
        <div className="card">

            <div>

                <div className="card-header">
                    Update Tipo de Vehiculos
                </div>
                <div className="card-body">
                    <form onSubmit={updateTipo_Vehiculo}>
                        <div className="form-group">
                            <label htmlFor="">Id : {Tipo_Vehiculo.id_Tipo_Vehiculo}</label>

                        </div>

                        <div className="form-group">
                            <label htmlFor="">Descripsion : </label>
                            <input type="text" className="form-control" id="descripsion" name="descripsion" 
                                value={Tipo_Vehiculo.descripsion} onChange={handleInputChange} required />
                            <small id="helpId" className="text-muted">Escriba la descripsion</small>
                        </div>
                        <div className="btn-group" role="group" aria-label="">
                            <button type="submit" className="btn btn-success">Editar Tipo de Vehiculo</button>
                            <Link to="/Tipo_VehiculoList" className="btn btn-warning">Cancelar</Link>

                        </div>

                    </form>

                </div>
            </div>

            <div className="card-footer text-muted">

            </div>

        </div>


    );
};
export default Tipo_VehiculoUpdate;