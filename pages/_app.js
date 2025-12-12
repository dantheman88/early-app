
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
            Available rewards 
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

export default MyApp;
