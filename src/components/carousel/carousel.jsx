import Glide from '@glidejs/glide'
import './carousel.css'
import { useEffect, useState} from 'react'
import '@glidejs/glide/dist/css/glide.core.min.css'
import ImageCarosuel from'../../assets/mulan.png'

export default function Carousel({movies}) {
  


  useEffect(() => {
    const glide = new Glide('.glide', {
      type: 'carousel',
      startAt: 0,
      perView: 1,
    })

    glide.mount()
  }, [])
  
  return (
    <section className="carousel">
      <div className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide">
              <img src={ImageCarosuel} alt="mulan-img" />
              <div className="buttons-wacht">
                <button className="button-now">VER AHORA</button>
                <button className="button-after">VER DESPUES</button>
              </div>
            </li>
            <li className="glide__slide">
              <img src="../../../public/raya.png" alt="mulan-img" />
              <div className="buttons-wacht">
                <button className="button-now">VER AHORA</button>
                <button className="button-after">VER DESPUES</button>
              </div>
            </li>
            <li className="glide__slide">
              <img src="../../../public/unidos.png" alt="mulan-img" />
              <div className="buttons-wacht">
                <button className="button-now">VER AHORA</button>
                <button className="button-after">VER DESPUES</button>
              </div>
            </li>
          </ul>
        </div>
        <div className="glide">
        <div className="glide__bullets" data-glide-el="controls[nav]">
          <button className="glide__bullet" data-glide-dir="=0"></button>
          <button className="glide__bullet" data-glide-dir="=1"></button>
          <button className="glide__bullet" data-glide-dir="=2"></button>
        </div>
      </div>
      </div>

      
    </section>
  )
}
