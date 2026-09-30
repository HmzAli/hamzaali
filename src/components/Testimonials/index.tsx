import "./Testimonials.scss"

const Experience = () => {
  const experiences = [
    {
      company: "Edvance",
      role: "Senior Full-Stack Engineer",
      period: "Oct 2025 – Present",
      points: [
        "Rebuilt the payment and settlement platform with a ledger-based system and a paylater product for school fee instalments",
        "Migrated customer data from a monolith to microservices, improving scalability",
        "Shipped AI features: an agentic overdue-fee reminder workflow and a RAG-powered support chatbot"
      ]
    },
    {
      company: "Pickles Auctions",
      role: "Senior Full-Stack Engineer",
      period: "Jun 2024 – Aug 2025",
      points: [
        "Replaced the buyer deposit system, saving thousands of ringgits in fees and enabling instant settlement",
        "Delivered end-to-end refunds, replacing a slow, error-prone email process",
        "Built an AI service that eliminated manual vehicle registration data entry"
      ]
    },
    {
      company: "Snappymob",
      role: "Senior Software Engineer",
      period: "Dec 2021 – Jun 2024",
      points: [
        "Built a ledger-based fee disbursement system with tracking and customer reporting",
        "Launched a parent portal for viewing and paying school fees per child",
        "Improved logistics microservice resilience with retries and dead-lettering"
      ]
    },
    {
      company: "Access Workspace Malaysia",
      role: "Full-Stack Engineer",
      period: "Aug 2019 – Dec 2021",
      points: [
        "Built a unified authentication and permissions microservice, removing multiple logins across Volcanic services",
        "Rebuilt ticketing APIs with real-time updates, auto-saving, and history tracking",
        "Created a job feed editor that standardised feeds from multiple sources"
      ]
    },
    {
      company: "Red Ape Solutions",
      role: "Software Engineer",
      period: "Jul 2015 – Aug 2019",
      points: [
        "Built the mobile version of an online shopping platform with full web feature parity",
        "Added login attempt tracking and AWS WAF rate limiting to strengthen security",
        "Shipped OTP verification with automatic SMS reading and managed Google Play and App Store releases"
      ]
    }
  ]

  return (
    <div className="testimonials main-section">
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 15px' }}>
        <h2
          className="main-section__title"
          data-content-id="testimonials-section-title"
          data-aos="fade-in"
          data-aos-duration="300"
          style={{ color: '#083c5d', marginBottom: '60px', textAlign: 'center' }}
        >
          Experience Summary
        </h2>

        <div className="testimonial-wrapper" data-aos="fade-in" data-aos-duration="500">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item" style={{ marginTop: '30px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#083c5d', margin: 0 }}>
                  {exp.role}, {exp.company}
                </h3>
                <span style={{ fontSize: '0.85rem', color: '#888', fontStyle: 'italic', whiteSpace: 'nowrap' }}>
                  {exp.period}
                </span>
              </div>
              <ul style={{ paddingLeft: '18px', listStyle: 'disc', marginTop: '8px' }}>
                {exp.points.map((point, i) => (
                  <li key={i} style={{ fontSize: '0.9rem', color: '#222', marginBottom: '5px', lineHeight: 1.55 }}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience