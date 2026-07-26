import API from "./api";

export const getDashboard = async () => {

    const token = localStorage.getItem("token");

    return API.get(
        "/dashboard",
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

};