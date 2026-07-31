import API from "./api";

export const getReport = async () => {

    return API.get("/report");

};