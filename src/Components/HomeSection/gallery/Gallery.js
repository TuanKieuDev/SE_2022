import React from "react"
import data from "./data"
import "./gallery.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Gallery = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  }
  return (
    <div>
      <section className='collection'>
        <div className='container top'>
          <Slider {...settings}>
            {data.map((value) => {
              return (
                <div className='box'>
                  <a href={value.href} target="_blank">
                  <img src={value.cover} alt='' style={{width:250}}/>
                  </a>
                </div>
              )
            })}
          </Slider>
        </div>
      </section>
    </div>
  )
}

export default Gallery
