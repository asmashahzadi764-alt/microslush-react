import ServiceCard from './ServiceCard'

const services = [
  {
    img: "https://microslush.com/wp-content/uploads/2022/08/image-14.png",
    title: "Web Development",
    desc: "We provide skillful software engineering to the full spectrum of technologies from simple frontend prototyping to the high-performing sites."
  },
  {
    img: "https://microslush.com/wp-content/uploads/2022/08/image-13.png",
    title: "Mobile Development",
    desc: "For the past decade, we have been creating high performance, feature-packed applications that will meet all your expectations."
  },
  {
    img: "https://microslush.com/wp-content/uploads/2022/08/image-17.png",
    title: "Trading",
    desc: "Our core expertise is to program autotrading bots with zero error & high accuracy so that you can enjoy vacations & earn money at the same time."
  },
  {
    img: "https://microslush.com/wp-content/uploads/2022/08/image-12.png",
    title: "Custom Software",
    desc: "We develop customized software with a business-centric approach, fulfilling your business needs with greater scalability, reliability, support & maintenance."
  },
  {
    img: "https://microslush.com/wp-content/uploads/2022/10/image-42.webp",
    title: ".NET",
    desc: "Optimized .NET solutions developed by professionals and implemented by modern frameworks. We're providing .NET services to the enterprise since 2021."
  },
  {
    img: "https://microslush.com/wp-content/uploads/2022/08/image-18.png",
    title: "Blockchain",
    desc: "Developing powerful software solutions with blockchain, enhancing efficiency, productivity, and security with centralized and decentralized choices."
  },
]

function ServicesGrid() {
  return (
    <section className="services__1">
      <h2>Services We <span className="services-color">Offer</span></h2>

      <div className="services-grid">
        {services.map((s) => (
          <ServiceCard key={s.title} img={s.img} title={s.title} desc={s.desc} />
        ))}
      </div>

      <a href="#" className="btn">View all servises</a>
    </section>
  )
}

export default ServicesGrid