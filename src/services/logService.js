import http from "../http-common";
const getAll = () => {
 return http.get("/Log");
};
const get = id_Alquiler => {
 return http.get(`/Log/${id_Alquiler}`);
};
const create = data => {
 return http.post("/Log", data);
};

 
const logService = {
 getAll,
 get,
 create

};
export default logService