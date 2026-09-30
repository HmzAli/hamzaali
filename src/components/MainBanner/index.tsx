import './MainBanner.scss'
import { useEffect } from 'react'

const MainBanner = () => {
  useEffect(() => {
    
  }, [])
  return (
    <section className="main-banner">
      <div className="container">
        <div className="tagline" data-content-id="tagline" id="tagline">
          <h1>Hamza Ali (Isaac)</h1>
          <h3>Full Stack Developer</h3>
          <br />
          <h4><strong>FinTech | SaaS | System Integration | Web Development</strong></h4>
          <small><strong>TypeScript | Golang | Node.js | React | AWS | PostgreSQL</strong></small>
        </div>
      </div>

      <img src="/grid.webp" alt="bg" className="grid"/>
    </section>
  )
}

export default MainBanner 