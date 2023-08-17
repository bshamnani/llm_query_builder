import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>LLM Query Builder</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </nav>
  );
}

export default Navbar;