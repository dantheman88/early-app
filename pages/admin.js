export default function Admin({ user }) {
  if (!user) {
    return <p>You must be logged in to view the admin panel.</p>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Admin Dashboard</h1>
      <p>Welcome {user.email}</p>
    </div>
  );
}
