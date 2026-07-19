function FooterColumn({ heading, links }) {
  return (
    <div>
      <h4>{heading}</h4>
      <ul>
        {links.map((link) => (
          <li key={link}><a href="#">{link}</a></li>
        ))}
      </ul>
    </div>
  )
}

export default FooterColumn