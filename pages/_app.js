import "../styles/globals.css";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div className="app-shell">
      <Header />
      <main className="page">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
