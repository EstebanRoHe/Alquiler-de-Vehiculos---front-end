import http from "../http-common";
const getAll = () => {
 return http.get("/Tipo_Vehiculo");
};
const get = id_Tipo_Vehiculo => {
 return http.get(`/Tipo_Vehiculo/${id_Tipo_Vehiculo}`);
};
const create = data => {
 return http.post("/Tipo_Vehiculo", data);
};
const update = (id_Tipo_Vehiculo, data) => {
 return http.put(`/Tipo_Vehiculo`, data);
};
const remove = id_Tipo_Vehiculo => {
 return http.delete(`/Tipo_Vehiculo/${id_Tipo_Vehiculo}`);
};

 
const tipo_VehiculoService = {
 getAll,
 get,
 create,
 update,
 remove
};
export default tipo_VehiculoService