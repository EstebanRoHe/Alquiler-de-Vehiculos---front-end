import React, { useState, useEffect } from "react";
import PersonaDataService from '../services/personaService';
import { Link, useParams, useNavigate } from 'react-router-dom';

const PersonaList = () => {
    const [Persona, setPersona] = useState([]);
    let navigate = useNavigate();


    useEffect(() => {
        retrievePersonas();
        
    },[]);


    const retrievePersonas = () => {
        PersonaDataService.getAll()
            .then(response => {
                setPersona(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

   const eliminar = (id_persona)=>{
    PersonaDataService.remove(id_persona)
    .then(response => {
        console.log(response.data);
        alert("Se Elimino correctamente");
        navigate(retrievePersonas());
        
    });
}

    return (

        <div className="card">
            <div className="card-header">
                <Link className="btn btn-success" to={"/PersonaCreate"}>Agregar una Persona</Link>
            </div>
            <div className="card-body">
                <h2> Lista de Personas </h2>
                <table className="table">

                    <thead>

                        <tr>
                            <th>ID</th>
                            <th>Identificacion</th>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    {Persona ? (
                        <tbody>
                            { Persona && Persona.map(
                                (Persona) => (

                                    <tr key={Persona.id_persona}>
                                        <td>{Persona.id_persona}</td>
                                        <td>{Persona.identificacion}</td>
                                        <td>{Persona.nombre}</td>

                                        <td><div className="btn-group" role="group" aria-label="">
                                            <Link className="btn btn-warning" to={"/PersonaUpdate/"+Persona.id_persona}>Editar</Link>
                                            <button className="btn btn-danger" onClick={()=>eliminar(Persona.id_persona)}
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
export default PersonaList;
