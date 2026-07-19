function NavDropdown({ label, items }) {
  return (
    <li className="dropdown">
      <a href="#">{label} ▾</a>
      <ul className="dropdown-menu">
        {items.map((item) => (
          <li key={item}><a href="#">{item}</a></li>
        ))}
      </ul>
    </li>
  )
}

export default NavDropdown