function UsersTable({ users }) {
  return (
    <div className="users-table">

      <h2>Registered Users</h2>

      <table>

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Subscription</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {users.map((user) => (
            <tr key={user.id}>

              <td>{user.name}</td>

              <td>{user.email}</td>

              <td>{user.subscription}</td>

              <td>{user.status}</td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default UsersTable;