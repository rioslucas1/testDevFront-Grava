import NavItem from './NavItem';

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <NavItem texto="Home" extraClass="home-button" />
        <div className="nav-group">
          <NavItem texto="Pokemons" customHref='#gallery' />
          <NavItem texto="Pokemon Types" customHref='#pokemontypes' />
          <NavItem texto="Gallery" customHref="#gallery"/>
          <NavItem texto="Contact" customHref="#footer"  />
        </div>
      </nav>
    </header>
  );
}
