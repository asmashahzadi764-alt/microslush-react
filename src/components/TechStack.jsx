import TechItem from './TechItem'

const techStack = [
  { img: "/assets/php.webp", label: "PHP Developer" },
  { img: "/assets/Larvel.webp", label: "Laravel Developer" },
  { img: "/assets/Ruby.webp", label: "Rails Developer" },
  { img: "/assets/MERN-stack.webp", label: "MERN Stack" },
  { img: "/assets/MEAN-stack-240x220.webp", label: "MEAN Stack" },
  { img: "/assets/Blockchain.webp", label: "Blockchain Developer" },
  { img: "/assets/JAVA.webp", label: "Java Developer" },
  { img: "/assets/JAVA-spring-boot.webp", label: "Java Spring boot" },
  { img: "/assets/Dajango.webp", label: "Django Developer" },
  { img: "/assets/Python.webp", label: "Python Developer" },
  { img: "/assets/WORDPRESS.webp", label: "WordPress Developer" },
  { img: "/assets/WooCommerce.webp", label: "WooCommerce Developer" },
  { img: "/assets/NODE-js.webp", label: "Node JS Developer" },
  { img: "/assets/Angular-JS.webp", label: "Angular JS Developer" },
  { img: "/assets/React_Logo.png", label: "ReactJS Developer" },
  { img: "/assets/RUST.webp", label: "Rust Developer" },
  { img: "/assets/JAVA-Script.webp", label: "JavaScript Developer" },
  { img: "/assets/VUE-JS.webp", label: "VueJS Developer" },
  { img: "/assets/Golang.webp", label: "Golang Developer" },
  { img: "/assets/Flutter.webp", label: "Flutter Developer" },
]

function TechStack() {
  return (
    <section className="stack">
      <h1>Our Technology Stack</h1>
      <p>
        We develop optimized solutions integrated with the latest technologies,
        making them more secure and efficient.
      </p>

      <div className="tech-grid">
        {techStack.map((t) => (
          <TechItem key={t.label} img={t.img} label={t.label} />
        ))}
      </div>
    </section>
  )
}

export default TechStack