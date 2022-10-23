import React, { useState } from 'react';
import tipo_VehiculoService from '../services/tipo_VehiculoService';
import { Link } from 'react-router-dom';

const Tipo_VehiculoCreate = () => {


    const initialTipo_VehiculoState = {
        id_Tipo_Vehiculo: null,
        descripsion: ""

    };
    const [Tipo_Vehiculo, setTipo_Vehiculo] = useState(initialTipo_VehiculoState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setTipo_Vehiculo({ ...Tipo_Vehiculo, [name]: value });
    };

    const saveTipo_Vehiculo = () => {
        var data = { id_Tipo_Vehiculo: Tipo_Vehiculo.id_Tipo_Vehiculo, descripsion: Tipo_Vehiculo.descripsion };
        tipo_VehiculoService.create(data)
            .then(response => {
                setTipo_Vehiculo({ descripsion: response.data.descripsion });
                alert("Se agrego correctamente");
                setSubmitted(false);
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
                    Agregar Tipo de Vehiculo Nuevos
                </div>
                <div className="card-body">
                    <form onSubmit={saveTipo_Vehiculo}>

                        <div className="form-group">
                            <label htmlFor="">Descripsion :</label>
                            <input type="text" className="form-control" id="descripsion" required value={Tipo_Vehiculo.descripsion}  onChange={handleInputChange} name="descripsion" />

                            <small id="helpId" className="text-muted">Escriba una descripsion</small>
                        </div>

                        

                        <div className="btn-group" role="group" aria-label="">
                            <button type="submit" className="btn btn-success">Agregar un Nuevo Tipo de Vehiculo</button>
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

export default Tipo_VehiculoCreate;