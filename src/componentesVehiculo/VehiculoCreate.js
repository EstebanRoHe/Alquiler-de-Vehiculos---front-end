import React, { useState, useEffect } from 'react';
import vehiculoService from '../services/vehiculoService';
import Tipo_VehiculoDataService from '../services/tipo_VehiculoService'
import { Link } from 'react-router-dom';

const VehiculoCreate = () => {


    const [Tipo_Vehiculo, setTipo_Vehiculo] = useState([]);
    const [Tipo, setTipo] = useState(null);
    const [Placa, setPlaca] = useState("");
    const  [ListaV, setListaV] = useState([]);

    useEffect(() => {
        ListarTipo_Vehiculo();
        retrievePersonas();


    }, []);
    const retrievePersonas = () => {
        vehiculoService.getAll()
            .then(response => {
                setListaV(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
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
    const saveVehiculo = () => {
        var data = { placa: Placa, tipo_vehiculo: Tipo };
        if (data.tipo_vehiculo != null) {
            var validacion = true;
        
            ListaV.forEach(listaV=>{
                if(listaV.placa == data.placa){
                    validacion=false;
                }
    
            })
            if(validacion){

            vehiculoService.create(data)
                .then(response => {
                    console.log(response.data);
                    alert("Se agrego correctamente");
                }).catch(e => {
                    console.log(e);
                });
            }else{
                alert("La placa ya existe");
            }

        } else {
            alert("Seleccione un Tipo de Vehiculo");
        }
    };

    return (
        <div className="card">

            <div>

                <div className="card-header">
                    Agregar Un Vehiculo Nuevo
                </div>
                <div className="card-body">
                    <form onSubmit={saveVehiculo}>

                        <div className="form-group">
                            <label htmlFor="">Placa :</label>
                            <input type="text" className="form-control" id="placa" required value={Placa} onChange={e => { setPlaca(e.target.value) }} name="placa" />
                            <small id="helpId" className="text-muted">Escriba la Placa</small>
                        </div>

                        <div className="form-group">
                            <div className="form-group">

                                <select className="custom-select" name="tipo_vehiculo" id="tipo_vehiculo" onChange={e => {
                                    console.log(JSON.parse(e.target.value))
                                    setTipo(JSON.parse(e.target.value))
                                }}>
                                    <option selected>Seleccione un Tipo de Vehiculo</option>
                                    {Tipo_Vehiculo && Tipo_Vehiculo.map(
                                        (tipo_Vehiculo) => (
                                            <option value={JSON.stringify(tipo_Vehiculo)}>{tipo_Vehiculo.descripsion}</option>

                                        ))}

                                </select>
                            </div>
                            <label htmlFor="">Tipo de Vehiculo :</label>


                            <small id="helpId" className="text-muted">Seleccione el Tipo de Vehiculo</small>
                        </div>

                        <div className="btn-group" role="group" aria-label="">
                            <button type="submit" className="btn btn-success">Agregar Un Vehiculo Nuevo</button>
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

export default VehiculoCreate;