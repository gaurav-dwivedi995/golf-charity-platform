import API from "./api";

export const getDashboard = () => API.get("/admin/dashboard");

export const getUsers = () => API.get("/admin/users");

export const deleteUser = (id) =>
    API.delete(`/admin/users/${id}`);

export const makeAdmin = (id) =>
    API.put(`/admin/make-admin/${id}`);

export const updateMembership = (id, membership) =>
    API.put(`/admin/membership/${id}`, {
        membership,
    });