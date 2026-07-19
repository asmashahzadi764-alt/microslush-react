function TechItem({ img, label }) {
  return (
    <div className="tech-item">
      <img src={img} alt={label} />
      <span>{label}</span>
    </div>
  )
}

export default TechItem