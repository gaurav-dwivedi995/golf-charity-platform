function SubscriptionManager({ subscriptions }) {

    console.log("Subscriptions =>", subscriptions);

    return (

        <div className="subscription-manager">

            <h2>Subscription Management</h2>

            <h3 style={{ color: "red" }}>
                Total Subscriptions : {subscriptions.length}
            </h3>

            <table>

                <thead>

                    <tr>

                        <th>User</th>
                        <th>Plan</th>
                        <th>Amount</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Status</th>

                    </tr>

                </thead>

                <tbody>

                    {
                        subscriptions.length === 0 ? (

                            <tr>

                                <td
                                    colSpan="6"
                                    style={{
                                        textAlign: "center",
                                        color: "red",
                                        fontWeight: "bold"
                                    }}
                                >
                                    No Subscription Found
                                </td>

                            </tr>

                        ) : (

                            subscriptions.map((sub) => (

                                <tr key={sub.id}>

                                    <td>{sub.full_name}</td>

                                    <td>{sub.plan_name}</td>

                                    <td>₹{sub.amount}</td>

                                    <td>
                                        {new Date(sub.start_date).toLocaleDateString()}
                                    </td>

                                    <td>
                                        {new Date(sub.end_date).toLocaleDateString()}
                                    </td>

                                    <td>{sub.status}</td>

                                </tr>

                            ))

                        )
                    }

                </tbody>

            </table>

        </div>

    );

}

export default SubscriptionManager;