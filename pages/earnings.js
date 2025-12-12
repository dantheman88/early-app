import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";

export default function Earnings() {
  const [user] = useAuthState(auth);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function load() {
      if (!user) return;
      const res = await fetch(`/api/earnings?email=${user.email}`);
      const json = await res.json();
      setData(json);
    }
    load();
  }, [user]);

  if (!user) return <p>Please log in to view your earnings.</p>;
  if (!data) return <p>Loading earnings...</p>;

  return (
    <div className="earnings-container">
      <h1>Your Earnings</h1>

      <div className="card">
        <h3>Total Earned</h3>
        <p className="amount">£{data.total}</p>
      </div>

      <div className="card">
        <h3>Pending</h3>
        <p className="amount">£{data.pending}</p>
      </div>

      <div className="card">
        <h3>Clicks</h3>
        <p>{data.clicks}</p>
      </div>

      <div className="card">
        <h3>Completed Offers</h3>
        <p>{data.offersCompleted}</p>
      </div>
    </div>
  );
}
