import React, {useState} from 'react'
import { ListGroup, ListGroupItem, ListGroupItemText, ListGroupItemHeading, Button } from 'reactstrap';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';

const DogIndex2 = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === props.doggos.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }

    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? props.doggos.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
    const slides = props.doggos.map((item) => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.img}
          >
            <img src={item.img} alt={item.altText} />
            <CarouselCaption captionText={item.enjoys} captionHeader={item.name} />
          </CarouselItem>
        );
      });

    return (
    <>
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={props.doggos} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
        <br></br>
        <Button className="btn btn-warning mb-2 float-left" href="/newdog">Add Some Doggos</Button>
    </>
    );
}


export default DogIndex2
