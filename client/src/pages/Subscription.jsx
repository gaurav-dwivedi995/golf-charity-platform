import "../styles/Subscription.css";

function Subscription() {

    const plans =[
        {
            id:1,
            name:"basic",
            price:999,
            features: [
                 "Tournament Access",
                 "Leaderboard",
                "Participation Certificate"
    ]
        },
        {
            id:2,
            name:"premium",
            price:1999,
            features: [
                 "Everything in Basic",
                 "Priority Registration",
                "Premium Support"
    ]
        },
        {
            id:3,
            name:"Elite",
            price: 4999,
            features: [
            "Everything in Premium",
            "VIP Tournament Access",
            "Exclusive Rewards"
    ]
        }
    ];
  return (
    <div className="plans-container">
    {
        plans.map((plan)=>{
           return (
            <div className="plan-card" key={plan.id}>
         
                
                    <h2>{plan.name}</h2>
                    <h3>₹{plan.price}</h3>

                    <div className="features">

    {
        plan.features.map((feature, index) => {

            return (

                <p key={index}>
                    ✔ {feature}
                </p>

            );

        })
    }

</div>
                    <button>Buy Now</button>
                   
            </div>
        );
        })
}
    </div>
  );
}

export default Subscription;