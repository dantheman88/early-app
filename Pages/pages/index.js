import Link from 'next/link';

export default function Home({ user }) {
  return (
    <div>
      <h1>Early</h1>
      <p>Welcome{user ? ' ' + user.email : ''}! Go to the admin panel to add offers.</p>
      <p><Link href="/admin">Admin</Link></p>
    </div>
  );
}
