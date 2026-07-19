import NavDropdown from './NavDropdown'

const servicesItems = ["Desktop Software Developer", "App Developer", "Web Developer"]
const hireItems = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Django Developer",
  "Java Developer",
  "PHP Developer",
  "Node JS Developer",
]

function Navbar() {
  return (
    <header>
      <div className="navbar">
        <div className="logo">Microslush</div>

        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <NavDropdown label="Services" items={servicesItems} />
          <NavDropdown label="Hire Developer" items={hireItems} />
          <li><a href="#">Blog</a></li>
          <li><a href="#" className="btn">Contact Us</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar