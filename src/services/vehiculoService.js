import http from "../http-common";
const getAll = () => {
 return http.get("/Vehiculo");
};

const get = id_Vehiculo => {
 return http.get(`/Vehiculo/${id_Vehiculo}`);
};
const create = data => {
 return http.post("/Vehiculo", data);
};
const update = (id_Vehiculo, data) => {
 return http.put(`/Vehiculo`, data);
};
const remove = id_Vehiculo => {
 return http.delete(`/Vehiculo/${id_Vehiculo}`);
};

 
const vehiculoService = {
 getAll,
 get,
 create,
 update,
 remove
};
export default vehiculoService