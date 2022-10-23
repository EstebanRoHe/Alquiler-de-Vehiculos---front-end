import React, { useState, useEffect } from "react";
import logService from '../services/logService';
import { Link } from 'react-router-dom';

const LogList = () => {
    const [Log, setLog] = useState([]);



    useEffect(() => {
        logList();

    }, []);

    const logList = () => {
        logService.getAll()
            .then(response => {
                setLog
                (response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };



    return (

        <div className="card">
           
            <div className="card-body">
                <h2> Lista de Log </h2>
                <Link to="/PersonaList" className="btn btn-warning">Cancelar</Link>
                <table className="table">
                

                    <thead>

                        <tr>
                            <th>ID</th>
                            <th>Fecha</th>
                            <th>Metodo</th>
                        </tr>
                    </thead>
                    {Log ? (
                        <tbody>
                            {Log && Log.map(
                                (log) => (

                                    <tr key={log.id_log}>
                                        <td>{log.id_log}</td>
                                        <td>{log.fecha}</td>
                                        <td>{log.metodo}</td>
                                    </tr>

                                )
                            )}
                             <Link to="/PersonaList" className="btn btn-warning">Cancelar</Link>
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
export default LogList;
