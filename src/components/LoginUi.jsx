const LoginUI = ({ username, setUsername, password, setPassword, handleSubmit }) => {
    return (
      <div className="container mt-5">
        <div className="card p-4 shadow-sm">
          <h2 className="text-center mb-4">Faculty Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username:
              </label>
              <input
                type="text"
                id="username"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default LoginUI;
  