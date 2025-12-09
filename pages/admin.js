import { useState } from 'react';
import { auth } from '../lib/firebase';

export default function Admin() {
  const [title, setTitle] = useState('');

  const createOffer = async (e) => {
    e.preventDefault();

    if (!auth.currentUser) {
      return alert('You must be logged in as an admin.');
    }

    const token = await auth.currentUser.getIdToken();

    const res = await fetch('/api/admin/create-offer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      },
      body: JSON.stringify({
        title,
        payout: 5,
        url: 'https://example.com'
      })
    });

    const data = await res.json();
    if (res.ok) alert('Offer created: ' + data.id);
    else alert('Error: ' + data.error);
  };

  return (
    <div>
      <h1>Admin</h1>

      <form onSubmit={createOffer}>
        <input 
          placeholder="Offer title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
