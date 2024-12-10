import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <Carousel autoPlay interval={1500} infiniteLoop>
      <div>
        <img src="https://i.postimg.cc/7hr7xP5n/Leonardo-Kino-XL-japanes-vocabulary-learning-website-banner-ma-0.jpg" />
      </div>
      <div>
        <img src="https://i.postimg.cc/xjb85SX9/Leonardo-Kino-XL-japanes-vocabulary-learning-website-banner-ma-3.jpg" />
      </div>
      <div>
        <img src="https://i.postimg.cc/bNcJFFnk/Leonardo-Kino-XL-japanes-vocabulary-learning-website-banner-ma-1.jpg" />
      </div>
      <div>
        <img src=" https://i.postimg.cc/BQT6Wc5y/Leonardo-Kino-XL-japanes-vocabulary-learning-website-banner-ma-1.jpg" />
      </div>
    </Carousel>
  );
};

export default Banner;
