import "../styles/globals.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav className="top-nav">
        <div className="nav-left">
          <Link href="/" className="nav-btn">
            Home
          </Link>
        </div>

        <div className="nav-right">
          <Link href="/drops" className="nav-btn">
            Drops
          </Link>
          <Link href="/profile" className="nav-btn nav-primary">
            Account
          </Link>
        </div>
      </nav>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 18px;
}

.nav-left,
.nav-right {
  display: flex;
  gap: 12px;
}

.nav-btn {
  padding: 8px 14px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  text-decoration: none;
  font-weight: 500;
}

.nav-btn:hover {
  background: rgba(255, 255, 255, 0.15);
}

.nav-primary {
  background: linear-gradient(135deg, #22c55e, #16a34a);
}
