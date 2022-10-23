import http from "../http-common";
const getAll = () => {
 return http.get("/Alquiler");
};
const get = id_Alquiler => {
 return http.get(`/Alquiler/${id_Alquiler}`);
};
const create = data => {
 return http.post("/Alquiler", data);
};
const update = (id_Alquiler, data) => {
 return http.put(`/Alquiler`, data);
};
const remove = id_Alquiler => {
 return http.delete(`/Alquiler/${id_Alquiler}`);
};

 
const alquilerService = {
 getAll,
 get,
 create,
 update,
 remove
};
export default alquilerService