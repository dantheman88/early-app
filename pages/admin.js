export default function Admin({ user }) {
  if (!user) {
    return <p>You must be logged in to view the admin page.</p>;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Logged in as: {user.email}</p>

      <h3>Create Offer (demo only)</h3>
      <p>This page will later include offer creation + payout tracking.</p>
    </div>
  );
}
