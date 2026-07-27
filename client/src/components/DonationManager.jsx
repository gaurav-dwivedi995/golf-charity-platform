function DonationManager({ donations }) {

    return (

        <div className="donation-manager">

            <h2>Donation Management</h2>

            <table>

                <thead>

                    <tr>

                        <th>Donor</th>

                        <th>Email</th>

                        <th>Amount</th>

                        <th>Payment</th>

                        <th>Transaction ID</th>

                        <th>Date</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        donations.length === 0 ? (

                            <tr>

                                <td colSpan="6">

                                    No Donations Found

                                </td>

                            </tr>

                        ) : (

                            donations.map((donation) => (

                                <tr key={donation.id}>

                                    <td>{donation.full_name}</td>

                                    <td>{donation.email}</td>

                                    <td>₹{donation.amount}</td>

                                    <td>{donation.payment_method}</td>

                                    <td>{donation.transaction_id}</td>

                                    <td>

                                        {

                                            new Date(

                                                donation.donated_at

                                            ).toLocaleDateString()

                                        }

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

export default DonationManager;