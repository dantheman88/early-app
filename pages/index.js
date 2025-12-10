import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Early App</h1>
      <p>Welcome to the Early app homepage.</p>
      <p>
        <Link href="/admin">Go to Admin</Link>
      </p>
    </div>
  );
}
