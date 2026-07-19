function DonationHistory({ donations }) {
  return (
    <div className="donation-history">

      <h2>Donation History</h2>

      <table>

        <thead>
          <tr>
            <th>Charity</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>

          {donations.map((donation) => (
            <tr key={donation.id}>

              <td>{donation.charity}</td>

              <td>{donation.date}</td>

              <td>₹{donation.amount}</td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default DonationHistory;