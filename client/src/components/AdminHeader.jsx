function AdminHeader({ admin }) {
  return (
    <div className="admin-header">

      <h1>Welcome, {admin.name} 👨‍💼</h1>

      <p>
        Manage users, tournaments, subscriptions and donations from one dashboard.
      </p>

    </div>
  );
}

export default AdminHeader;