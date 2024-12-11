export default function NavItem({ texto, extraClass = '' }) {
  return (
    <a href="#" className={`nav-item ${extraClass}`}>
      {texto}
    </a>
  );
}
