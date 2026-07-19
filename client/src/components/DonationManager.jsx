function DonationManager({ donations }) {
  return (
    <div className="donation-manager">

      <h2>Donation Management</h2>

      <table>

        <thead>
          <tr>
            <th>Donor</th>
            <th>Charity</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>

          {donations.map((donation) => (
            <tr key={donation.id}>

              <td>{donation.donor}</td>

              <td>{donation.charity}</td>

              <td>₹{donation.amount}</td>

              <td>{donation.date}</td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default DonationManager;