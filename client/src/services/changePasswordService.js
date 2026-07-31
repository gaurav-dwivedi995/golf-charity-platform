import API from "./api";

export const changePassword = async (data) => {

    return API.put(

        "/auth/change-password",

        data

    );

};