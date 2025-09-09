import {Link} from "react-router-dom";

function Navbar() {
 return(
    <nav style={{ padding: "15px", background: "#f5f5f5" }}>
    <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
 );
}


export default Navbar;