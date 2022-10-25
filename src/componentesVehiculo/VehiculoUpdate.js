import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import vehiculoService from "../services/vehiculoService";
import Tipo_VehiculoDataService from '../services/tipo_VehiculoService';

const VehiculoUpdate = props => {
    const { id_Vehiculo } = useParams();



    const [Tipo_Vehiculo, setTipo_Vehiculo] = useState([]);
    const [Tipo, setTipo] = useState(null);
    const [Placa, setPlaca] = useState("");
    


    useEffect(() => {
        ListarTipo_Vehiculo();
      
    }, []);

   

    const updateVehiculo = () => {
        var data = { id_Vehiculo: id_Vehiculo, placa: Placa, tipo_vehiculo: Tipo };
        if (data.tipo_vehiculo != null) {
            vehiculoService.update(id_Vehiculo, data)
                .then(response => {
                    console.log(response.data);
                    alert("Se Modifico correctamente");
                })
                .catch(e => {
                    console.log(e);
                });
        } else {
            alert("Seleccione un Tipo de Vehiculo");
        }
    };

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
                            <label htmlFor="">Id : {id_Vehiculo}</label>
                        </div>


                        <div className="form-group">
                            <label htmlFor="">Placa :</label>
                            <input type="text" className="form-control" id="placa" required value={Placa}
                                onChange={e => { setPlaca(e.target.value) }} name="placa" />
                            <small id="helpId" className="text-muted">Escriba la Placa</small>
                        </div>

                        <div className="form-group">
                            <div className="form-group">

                                <select required className="custom-select" name="tipo_vehiculo" id="tipo_vehiculo" onChange={e => {
                                    console.log(JSON.parse(e.target.value))
                                    setTipo(JSON.parse(e.target.value))
                                }}>
                                    <option selected>Seleccione un Tipo de Vehiculo</option>
                                    {Tipo_Vehiculo && Tipo_Vehiculo.map(
                                        (tipo_Vehiculo) => (


                                            <option required value={JSON.stringify(tipo_Vehiculo)}>{tipo_Vehiculo.descripsion}</option>

                                        ))}

                                </select>
                            </div>
                            <label htmlFor="">Tipo de Vehiculo :</label>


                            <small id="helpId" className="text-muted">Seleccione el Tipo de Vehiculo</small>
                        </div>


                        <div className="btn-group" role="group" aria-label="">
                            <button type="submit" className="btn btn-success">Editar Vehiculo</button>
                            <Link to="/VehiculoList" className="btn btn-warning">Cancelar</Link>

                        </div>

                    </form>

                </div>
            </div>

            <div className="card-footer text-muted">

            </div>

        </div>


    );
};
export default VehiculoUpdate;
