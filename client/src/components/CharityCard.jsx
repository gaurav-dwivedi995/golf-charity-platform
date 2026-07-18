function CharityCard ({charity}){
    const progress = (charity.raised / charity.goal) *100;

    return (
        <div className="charity-card">

            <h3>{charity.name}</h3>

            <p>
                <strong>category:</strong>{charity.category}
            </p>

            <p>
                <strong>Raised:</strong>₹{charity.raised}
            </p>

            <p>
                <strong>Goal</strong>₹{charity.goal}
            </p>
            
            <div className="progress-bar">

                <div className="progress-fill"
                    style={{width: `${progress}%`}}
                ></div>
            </div>

            <p>{progress}% Fund Raised</p>

            <button>Donate Now</button>
      
        </div>
    );
}

export default CharityCard;