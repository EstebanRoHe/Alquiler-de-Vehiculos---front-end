import http from "../http-common";
const getAll = () => {
 return http.get("/Persona");
};
const get = id => {
 return http.get(`/Persona/${id}`);
};
const create = data => {
 return http.post("/Persona", data);
};
const update = (id_persona, data) => {
 return http.put(`/Persona`, data);
};
const remove = id_persona => {
 return http.delete(`/Persona/${id_persona}`);
};

 
const personaService = {
 getAll,
 get,
 create,
 update,
 remove
};
export default personaService