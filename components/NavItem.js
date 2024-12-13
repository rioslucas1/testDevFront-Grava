export default function NavItem({ texto, extraClass = '', customHref = '' }) {

  customHref = customHref ? customHref : '#';
  return (
    <a href={customHref} className={`nav-item ${extraClass}`}>
      {texto}
    </a>
  );
}
