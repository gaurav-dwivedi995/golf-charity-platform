import API from "./api";

export const donate = async (charity_id, amount) => {

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