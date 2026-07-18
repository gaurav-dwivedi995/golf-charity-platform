import "../styles/Charity.css";
import CharityCard from "../components/CharityCard";

function Charity() {

  const charities = [
    ...
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