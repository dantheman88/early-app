import Link from 'next/link';

export default function Header({ user, onSignOut }) {
  return (
    <header>
      <h3>Early App</h3>

      {user ? (
        <>
          <span>{user.email}</span>
          <button onClick={onSignOut}>Sign Out</button>
        </>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </header>
  );
}
