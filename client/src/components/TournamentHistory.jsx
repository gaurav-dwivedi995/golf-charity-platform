function TournamentHistory({ history }) {

    return (

        <div className="tournament-history">

            <h2>Tournament History</h2>

            <table>

                <thead>

                    <tr>

                        <th>Tournament</th>

                        <th>Location</th>

                        <th>Date</th>

                        <th>Status</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        history.length === 0 ?

                            (

                                <tr>

                                    <td colSpan="4">

                                        No Tournament History

                                    </td>

                                </tr>

                            )

                            :

                            (

                                history.map((item, index) => (

                                    <tr key={index}>

                                        <td>{item.title}</td>

                                        <td>{item.location}</td>

                                        <td>

                                            {

                                                new Date(
                                                    item.tournament_date
                                                ).toLocaleDateString()

                                            }

                                        </td>

                                        <td>

                                            {item.payment_status}

                                        </td>

                                    </tr>

                                ))

                            )

                    }

                </tbody>

            </table>

        </div>

    );

}

export default TournamentHistory;