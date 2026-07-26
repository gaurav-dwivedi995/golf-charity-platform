function DonationHistory({ donations }) {

    return (

        <div className="donation-history">

            <h2>Donation History</h2>

            <table>

                <thead>

                    <tr>

                        <th>Date</th>

                        <th>Amount</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        donations.length === 0 ?

                            (

                                <tr>

                                    <td colSpan="2">

                                        No Donations Yet

                                    </td>

                                </tr>

                            )

                            :

                            (

                                donations.map((donation, index) => (

                                    <tr key={index}>

                                        <td>

                                            {

                                                new Date(
                                                    donation.donated_at
                                                ).toLocaleDateString()

                                            }

                                        </td>

                                        <td>

                                            ₹{donation.amount}

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

export default DonationHistory;