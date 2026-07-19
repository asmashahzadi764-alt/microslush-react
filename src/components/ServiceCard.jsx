function ServiceCard({ img, title, desc }) {
  return (
    <div className="service-box">
      <img src={img} className="service-box__img" alt={title} />
      <strong>{title}</strong><br />
      {desc}
    </div>
  )
}

export default ServiceCard