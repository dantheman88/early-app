import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Early App</h1>
      <p>Welcome to the Early App homepage.</p>
      <p>
        <Link href="/admin">Go to Admin</Link>
      </p>
    </div>
  );
}
