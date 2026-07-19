function StatItem({ number, label }) {
  return (
    <div className="stat">
      <h2>{number}</h2>
      <p>{label}</p>
    </div>
  )
}

export default StatItem