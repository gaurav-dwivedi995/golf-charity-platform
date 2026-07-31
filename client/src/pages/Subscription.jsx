import "../styles/Subscription.css";
import { buySubscription } from "../services/subscriptionService";

function Subscription() {

    const plans = [

        {
            id: 1,
            name: "Basic",
            price: 999,
            features: [
                "Tournament Access",
                "Leaderboard",
                "Participation Certificate"
            ]
        },

        {
            id: 2,
            name: "Premium",
            price: 1999,
            features: [
                "Everything in Basic",
                "Priority Registration",
                "Premium Support"
            ]
        },

        {
            id: 3,
            name: "Elite",
            price: 4999,
            features: [
                "Everything in Premium",
                "VIP Tournament Access",
                "Exclusive Rewards"
            ]
        }

    ];

   async function handlePurchase(plan) {

    try {

        const today = new Date();

        const endDate = new Date();

        endDate.setMonth(endDate.getMonth() + 1);

        const start_date = today.toISOString().split("T")[0];

        const end_date = endDate.toISOString().split("T")[0];

        await buySubscription({

            plan_name: plan.name,

            amount: plan.price,

            start_date,

            end_date

        });

        alert("Subscription Purchased Successfully");

    }

    catch (err) {

        console.log(err);

        alert(
            err.response?.data?.message ||
            "Purchase Failed"
        );

    }

}
    return (

        <div className="plans-container">

            {

                plans.map((plan) => (

                    <div
                        className="plan-card"
                        key={plan.id}
                    >

                        <h2>{plan.name}</h2>

                        <h3>₹{plan.price}</h3>

                        <div className="features">

                            {

                                plan.features.map((feature, index) => (

                                    <p key={index}>
                                        ✔ {feature}
                                    </p>

                                ))

                            }

                        </div>

                        <button
                            onClick={() => handlePurchase(plan)}
                        >
                            Buy Now
                        </button>

                    </div>

                ))

            }

        </div>

    );

}

export default Subscription;