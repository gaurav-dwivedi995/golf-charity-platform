import API from "./api";

// Donate
export const donate = (charity_id, amount) => {

    return API.post(

        "/donation/donate",

        {
            charity_id,
            amount,
            payment_method: "UPI",
            transaction_id: "TXN" + Date.now()
        }

    );

};

// My Donations
export const getMyDonations = () => {

    return API.get("/donation/my");

};

// Admin - All Donations
export const getAllDonations = () => {

    return API.get("/donation/all");

};

// Donation By ID
export const getDonationById = (id) => {

    return API.get(`/donation/${id}`);

};