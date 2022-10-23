import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import PersonaDataService from "../services/personaService";
const PersonaUpdate = props => {
    const { id_persona } = useParams();

    const initialPersonaState = {
        id_persona: null,
        identificacion: "",
        nombre: ""
    };
    const [Persona, setPersona] = useState(initialPersonaState);

    const getPersona = id_persona => {
        PersonaDataService.get(id_persona)
            .then(response => {
                setPersona
                    (response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        if (id_persona)
            getPersona(id_persona);
    }, [id_persona]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setPersona
            ({ ...Persona, [name]: value });
    };

    const updatePersona = () => {
        PersonaDataService.update(Persona.id_persona, Persona)
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
                    Update Personas
                </div>
                <div className="card-body">
                    <form onSubmit={updatePersona}>
                    <div className="form-group">
                            <label htmlFor="">Id : {Persona.id_persona}</label>
                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Identificacion :</label>
                            <input type="number" className="form-control" id="identificacion" required
                                value={Persona.identificacion} onChange={handleInputChange} name="identificacion" />
                            <small id="helpId" className="text-muted">Escriba la Identificacion</small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Nombre :</label>
                            <input type="text" className="form-control" id="nombre" name="nombre" requide
                                value={Persona.nombre} onChange={handleInputChange} />
                            <small id="helpId" className="text-muted">Escriba el Nombre</small>
                        </div>
                        <div className="btn-group" role="group" aria-label="">
                            <button type="submit" className="btn btn-success">Editar Persona</button>
                            <Link to="/PersonaList" className="btn btn-warning">Cancelar</Link>

                        </div>


                    </form>

                </div>
            </div>

            <div className="card-footer text-muted">

            </div>

        </div>


    );
};
export default PersonaUpdate;