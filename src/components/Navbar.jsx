
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="site-header">
      <Link to="/" className="brand-header">
        <img src="/assets/element-03.webp" alt="Sabor Litoral" />
      </Link>

      <nav className="main-nav">
        <Link to="/#festival">Festival</Link>
        <Link to="/#charlas">Charlas</Link>
        <Link to="/#ubicacion">Ubicación</Link>
        <Link to="/#emprendedores">Emprendedores</Link>

        <Link to="/entradas" className="nav-ticket">
          MIS ENTRADAS
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
