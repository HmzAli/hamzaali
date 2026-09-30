import './MainBanner.scss'
import { useEffect } from 'react'

const MainBanner = () => {
  useEffect(() => {
    
  }, [])
  return (
    <section className="main-banner">``
      <div className="container">
        <div className="tagline" data-content-id="tagline" id="tagline">
           <h1 data-aos="fade-in" data-aos-duration="500" data-aos-delay="200">Hamza Ali (Isaac)</h1>
           <h3 data-aos="fade-in" data-aos-duration="500" data-aos-delay="200">Full Stack Developer</h3>
        </div>
      </div>

      <img src="/grid.webp" alt="bg" className="grid"/>
    </section>
  )
}

export default MainBanner 