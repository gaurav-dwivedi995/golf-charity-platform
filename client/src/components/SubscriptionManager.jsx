function SubscriptionManager({ subscriptions }) {
  return (
    <div className="subscription-manager">

      <h2>Subscription Management</h2>

      <table>

        <thead>
          <tr>
            <th>Plan</th>
            <th>Price</th>
            <th>Duration</th>
            <th>Subscribers</th>
          </tr>
        </thead>

        <tbody>

          {subscriptions.map((plan) => (
            <tr key={plan.id}>

              <td>{plan.name}</td>

              <td>₹{plan.price}</td>

              <td>{plan.duration} Days</td>

              <td>{plan.subscribers}</td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default SubscriptionManager;