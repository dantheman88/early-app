import Link from 'next/link';

export default function Home({ user }) {
  return (
    <div>
      <h1>Early</h1>
      <p>Welcome{user ? ' ' + user.email : ''}!</p>
      <p><Link href="/admin">Go to Admin</Link></p>
    </div>
  );
}
