import Carousel from 'react-bootstrap/Carousel';
import CarrouselImage from '../components/CarouselImage';


const CustomCarrousel = () => {
  return (
    <Carousel className='carrousel' fade>
      <Carousel.Item>
        <CarrouselImage src="https://hips.hearstapps.com/hmg-prod/images/legs-runners-athletes-women-and-men-run-city-royalty-free-image-1674578255.jpg?crop=0.886xw:0.735xh;0.0603xw,0&resize=640:*" alt="First slide" text="First slide" />

      </Carousel.Item>
      <Carousel.Item>
        <CarrouselImage src="https://cdn.runrepeat.com/storage/gallery/buying_guide_primary/26/26-best-adidas-running-shoes-19481965-960.jpg" alt="Second slide" text="Second slide" />

      </Carousel.Item>
      <Carousel.Item>
        <CarrouselImage src="https://media.gq.com.mx/photos/63ee6405f57c61d24bf50732/master/pass/nike-running-shoes-streakfly-invincible.jpg" alt="Third slide" text="Third slide" />

      </Carousel.Item>
    </Carousel>
  );
};

export default CustomCarrousel;
