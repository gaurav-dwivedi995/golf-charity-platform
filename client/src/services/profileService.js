import API from "./api";

export const getProfile = async () => {

    return API.get("/user/profile");

};

export const updateProfile = async (data) => {

    return API.put(
        "/user/profile/update",
        data
    );

};