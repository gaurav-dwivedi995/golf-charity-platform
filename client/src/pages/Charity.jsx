import "../styles/Charity.css";
import CharityCard from "../components/CharityCard";

function Charity() {

  const charities = [
    {
      id: 1,
      name: "Smile Foundation",
      category: "Education",
      raised: 250000,
      goal: 500000,
    },
    {
      id: 2,
      name: "Helping Hands",
      category: "Food & Health",
      raised: 120000,
      goal: 300000,
    },
    {
      id: 3,
      name: "Green Earth",
      category: "Tree Plantation",
      raised: 90000,
      goal: 200000,
    },
  ];

  return (
    <section className="charity">

      <h2>Support a Charity</h2>

      <div className="charity-container">

        {charities.map((charity) => (
          <CharityCard
            key={charity.id}
            charity={charity}
          />
        ))}

      </div>

    </section>
  );
}

export default Charity;