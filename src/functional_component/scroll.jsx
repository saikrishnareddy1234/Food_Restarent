import Carousel from 'react-bootstrap/Carousel';
function Scroll() {
  return (
    <Carousel>
      <Carousel.Item>
        <img style={{width:'100vw',height:'85vh'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYTY9dOcB2ooLYlBXzI3lOrShM4aZYodNRpkytYDUEsg&s=10'/>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:'100vw',height:'85vh'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU9DMyr5GB4snHv6Jwc1fUSyDmnLZfUDjg_1s2wNJYIw&s=10'/>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:'100vw',height:'85vh'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXvkFr3X-_nktUp4PivkaEDalH3cKfCH9f85FfWUr8aw&s=10'/>
      </Carousel.Item>
    </Carousel>
  );
}

export default Scroll;