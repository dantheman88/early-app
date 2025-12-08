import Link from 'next/link';

export default function Header({ user, onSignOut }) {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: 12, borderBottom: '1px solid #eee' }}>
      <div><Link href="/"><a style={{ fontWeight: 700 }}>Early</a></Link></div>
      <nav style={{ display: 'flex', gap: 12 }}>
        <Link href="/"><a>Home</a></Link>
        {user ? (
          <>
            <span>{user.email}</span>
            <button onClick={onSignOut}>Sign out</button>
          </>
        ) : (
          <Link href="/"><a>Sign in</a></Link>
        )}
      </nav>
    </header>
  );
}
