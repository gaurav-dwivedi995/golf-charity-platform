import API from "./api";

export const getAllSubscriptions = async () => {

    return API.get("/subscription/all");

};

export const buySubscription = async (subscriptionData) => {

    return API.post("/subscription/buy", subscriptionData);

};