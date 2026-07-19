import StatItem from './StatItem'

function Stats() {
  return (
    <section className="stats">
      <StatItem number="600+" label="Clients" />
      <StatItem number="6+" label="Years Experience" />
      <StatItem number="50+" label="Global Partners" />
    </section>
  )
}

export default Stats