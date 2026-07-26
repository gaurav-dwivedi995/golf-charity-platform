import { useEffect, useState } from "react";

import { donate } from "../services/donationService";
import { getAllCharities } from "../services/charityService";

import "../styles/Charity.css";
import CharityCard from "../components/CharityCard";

function Charity() {

    const [charities, setCharities] = useState([]);

    useEffect(() => {

        fetchCharities();

    }, []);

    async function fetchCharities() {

        try {

            const response = await getAllCharities();

            setCharities(response.data);

        } catch (err) {

            console.log(err);

        }

    }

    async function handleDonate(charity) {

        const amount = prompt("Enter Donation Amount");

        if (!amount) return;

        try {

            await donate(

                charity.id,

                Number(amount)

            );

            alert(

                `₹${amount} donated to ${charity.name}`

            );

            // Refresh latest data from database
            fetchCharities();

        } catch (err) {

            alert(

                err.response?.data?.message ||

                "Donation Failed"

            );

        }

    }

    return (

        <section className="charity">

            <h2>Support a Charity</h2>

            <div className="charity-container">

                {

                    charities.map((charity) => (

                        <CharityCard

                            key={charity.id}

                            charity={charity}

                            handleDonate={handleDonate}

                        />

                    ))

                }

            </div>

        </section>

    );

}

export default Charity;