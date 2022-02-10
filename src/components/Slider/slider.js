import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import css from './slider.module.css'

export default function MySlider () {
  const slides = [
    "https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1637144484_95593f16da7c42bd93c080ba657edb36.jpeg",
  ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    

    return(
        <div className="container">
        <Slider className={css.wrapper} {...settings}>
          {slides.map((item) => <img src={item} alt="n"/>)}
        </Slider>
      </div>
    )
}