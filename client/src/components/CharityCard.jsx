function CharityCard({

    charity,

    handleDonate

}) {

    const progress =

        (charity.raised / charity.goal) * 100;

    return (

        <div className="charity-card">

            <h3>{charity.name}</h3>

            <p>

                <strong>Category:</strong>

                {charity.category}

            </p>

            <p>

                <strong>Raised:</strong>

                ₹{charity.raised}

            </p>

            <p>

                <strong>Goal:</strong>

                ₹{charity.goal}

            </p>

            <div className="progress-bar">

                <div

                    className="progress-fill"

                    style={{

                        width: `${progress}%`

                    }}

                ></div>

            </div>

            <p>

                {progress.toFixed(0)}% Fund Raised

            </p>

            <button

                onClick={() =>

                    handleDonate(charity)

                }

            >

                Donate Now

            </button>

        </div>

    );

}

export default CharityCard;