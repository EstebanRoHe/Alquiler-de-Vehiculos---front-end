import React, { useState, useEffect } from 'react';

import personaService from '../services/personaService';

import {Link} from 'react-router-dom';

const PersonaCreate = () => { 
   
        
    const initialPersonaState = {
        id: null,
        identificacion: Number,
        nombre: ""
        
    };
    const [Persona, setPersona] = useState(initialPersonaState);
    const  [ListaP, setListaP] = useState([]);


    const handleInputChange = event=>{
        const {name,value}=event.target;
        setPersona({ ...Persona, [name]: value });
    };
    
    useEffect(() => {
        retrievePersonas();
        
    },[]);


    const retrievePersonas = () => {
        personaService.getAll()
            .then(response => {
                setListaP(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const savePersona = () => {
        var data = {id: Persona.id, identificacion: Persona.identificacion,nombre: Persona.nombre};
        var validacion = true;
        
        ListaP.forEach(listaP=>{
            if(listaP.identificacion == data.identificacion){
                validacion=false;
            }

        })
        if(validacion){

        personaService.create(data)
            .then(response => {
                setPersona({identificacion: response.data.identificacion,nombre: response.data.nombre });
                alert("Se agrego correctamente");
                
                console.log(response.data);
               
            })
            .catch(e => {
                console.log(e);
            });
        }else{
            alert("La identificacion ya existe");
        }
        
    };

        return (  
        <div className="card">     
                <div>
            <div className="card-header">
                Agregar Personas Nuevas
            </div>
            <div className="card-body">
                <form  onSubmit={
                savePersona}>

                  <div className="form-group">
                    <label htmlFor="">Identificacion :</label>
                    <input type="number" className="form-control" id="identificacion" required value={Persona.identificacion}   onChange={handleInputChange} name="identificacion" />                    
                    <small id="helpId" className="text-muted">Escriba la Identificacion</small>
                  </div>

                  <div className="form-group">
                    <label htmlFor="">Nombre :</label>
                    <input type="text" className="form-control" id="nombre" required value={Persona.nombre}  onChange={handleInputChange} name="nombre" />
                   <small id="helpId" className="text-muted">Escriba el Nombre</small>
                  </div>

                  <div className="btn-group" role="group" aria-label="">
                    <button type="submit" className="btn btn-success">Agregar Nueva Persona</button>
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
 
export default PersonaCreate;