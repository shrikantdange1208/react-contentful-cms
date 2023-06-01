import React from 'react'
import heroImg from '../assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-title">
        <h1>Contentful CMS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In, omnis? Ea
          totam dolor, ad quibusdam, atque facilis deleniti modi iste enim
          tenetur, laboriosam asperiores quisquam? Aliquid nobis quibusdam
          veniam. Doloribus.
        </p>
      </div>
      <div className="img-container">
        <img src={heroImg} alt="hero image" className="img" />
      </div>
    </section>
  )
}

export default Hero
