import React from 'react'
import Slider from "react-slick";
import gambar1 from "../assets/1665626679483.webp"


const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHiver: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='container mt-2'>
        <Slider {...settings}>
          <div>
            <img src={gambar1} alt="image" />
          </div>
          <div>
            <img src={gambar1} alt="image" />
          </div>
          <div>
            <img src={gambar1} alt="image" />
          </div>
          <div>
            <img src={gambar1} alt="image" />
          </div>
          <div>
            <img src={gambar1} alt="image" />
          </div>
        </Slider>
    </div>
  )
}

export default Slide
