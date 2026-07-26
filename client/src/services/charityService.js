import API from "./api";

export const getAllCharities = async () => {

    return API.get("/charity/all");

};