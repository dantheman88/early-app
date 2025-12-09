import Link from 'next/link';

export default function Header({ user, onSignOut }) {
  return (
    <header style={{
      padding: '10px 20px',
      borderBottom: '1px solid #ddd',
      marginBottom: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h2>Early</h2>

      <nav>
        <Link href="/" style={{ marginRight: 20 }}>Home</Link>
        <Link href="/admin" style={{ marginRight: 20 }}>Admin</Link>

        {user ? (
          <button onClick={onSignOut}>Sign Out</button>
        ) : (
          <span>Not signed in</span>
        )}
      </nav>
    </header>
  );
}
