import FooterColumn from './FooterColumn'

const servicesLinks = [
  "Web App Development",
  "Desktop Software Development",
  "Mobile App Development",
  "Stock Trading App",
  "E-Commerce Platform",
  "Digital Marketing",
]

const technologiesLinks = [
  "PHP Developer",
  "Laravel Developer",
  "Ruby on Rails Developer / Rails Developer",
  "MERN Stack Developer",
  "MEAN Stack Developer",
  "Blockchain Developer / Crypto Developer",
  "Java Developer",
  "Java Spring boot Developer",
  "Django Developer",
]

const companyLinks = [
  "Refund Policy",
  "Portfolio",
  "About Us",
  "Contact Us",
  "Blog",
  "Home",
  "Privacy",
  "Disclaimer",
  "FAQ",
]

function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <FooterColumn heading="Services" links={servicesLinks} />
        <FooterColumn heading="Technologies" links={technologiesLinks} />
        <FooterColumn heading="Company" links={companyLinks} />

        <div>
          <h4>Contact Us</h4>
          <p>Email: info@microslush.com</p>

          <h4 style={{ marginTop: "20px" }}>United States Office</h4>
          <p>473 Mundet Pl, Hillside, New Jersey</p>
          <p>+1 (551) 344-0181</p>

          <h4 style={{ marginTop: "20px" }}>United Kingdom Office</h4>
          <p>United Kingdom Office</p>
          <p>128 City Road, London, United Kingdom, EC1V 2NX</p>
          <p>+44 7465 278834</p>
          <p>Company #: 16509582</p>

          <h4 style={{ marginTop: "20px" }}>Lahore Office</h4>
          <p>Room #7, 4th Floor, 37-Civic Center</p>
          <p>Model Town Lahore</p>
          <p>+92 321 1307287</p>
        </div>
      </div>

      <div className="copyright">
        © Microslush 2022 All rights reserved.
      </div>
    </footer>
  )
}

export default Footer