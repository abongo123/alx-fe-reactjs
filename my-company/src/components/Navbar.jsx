import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#333", color: "white" }}>
      <ul style={{ listStyle: "none", display: "flex", gap: "20px" }}>
        <li><Link to="Home/" style={{ color: "lightgreen", textDecoration: "none" }}>Home</Link></li>
        <li><Link to="/about" style={{ color: "lightgreen", textDecoration: "none" }}>About</Link></li>
        <li><Link to="/services" style={{ color: "lightgreen", textDecoration: "none" }}>Services</Link></li>
        <li><Link to="/contact" style={{ color: "wlightgreen", textDecoration: "none" }}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
