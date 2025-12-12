import "../styles/globals.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav className="top-nav">
        <div className="nav-left">
          <Link href="/">Early App</Link>
        </div>

        <div className="nav-right">
          <Link href="/drops">Drops</Link>
          <Link href="/profile">Profile</Link>
        </div>
      </nav>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
