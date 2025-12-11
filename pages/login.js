export default function LoginPage() {
  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h1>Login</h1>

      <form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input 
          type="email" 
          placeholder="Email" 
          style={{ padding: "10px", fontSize: "16px" }} 
        />

        <input 
          type="password" 
          placeholder="Password" 
          style={{ padding: "10px", fontSize: "16px" }}
        />

        <button 
          type="submit" 
          style={{
            padding: "10px",
            backgroundColor: "black",
            color: "white",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
