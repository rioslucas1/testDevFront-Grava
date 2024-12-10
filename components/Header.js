// components/Header.js
import NavItem from './NavItem';

export default function Header() {
  return (
    <header className="header">
      <button className="header-button">Home</button>
      <nav className="nav">
        <NavItem texto="Inicio" />
        <NavItem texto="Servicios" />
        <NavItem texto="Acerca" />
        <NavItem texto="Contacto" />
      </nav>
    </header>
  );
}
