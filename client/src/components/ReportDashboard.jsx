function ReportDashboard({ report }) {

    return (

        <div className="report-dashboard">

            <h2>Reports & Analytics</h2>

            <table>

                <thead>

                    <tr>

                        <th>Report</th>

                        <th>Value</th>

                    </tr>

                </thead>

                <tbody>

                    <tr>

                        <td>Total Users</td>

                        <td>{report.totalUsers}</td>

                    </tr>

                    <tr>

                        <td>Total Tournaments</td>

                        <td>{report.totalTournaments}</td>

                    </tr>

                    <tr>

                        <td>Total Donations</td>

                        <td>{report.totalDonations}</td>

                    </tr>

                    <tr>

                        <td>Total Subscriptions</td>

                        <td>{report.totalSubscriptions}</td>

                    </tr>

                    <tr>

                        <td>Donation Revenue</td>

                        <td>₹{report.donationRevenue}</td>

                    </tr>

                    <tr>

                        <td>Subscription Revenue</td>

                        <td>₹{report.subscriptionRevenue}</td>

                    </tr>

                    <tr>

                        <td><strong>Total Revenue</strong></td>

                        <td><strong>₹{report.totalRevenue}</strong></td>

                    </tr>

                </tbody>

            </table>

        </div>

    );

}

export default ReportDashboard;