import NavItem from './NavItem';

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <NavItem texto="Home" extraClass="home-button" />
        <div className="nav-group">
          <NavItem texto="Pokemon Types" />
          <NavItem texto="Pokedex" />
          <NavItem texto="About us" />
          <NavItem texto="Contact" />
        </div>
      </nav>
    </header>
  );
}
