import React, { useState } from 'react';
import One from './../Assets/1.svg';
import Two from './../Assets/2.svg';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: One,
    altText: 'Slide 1',
    caption: <div><p className="new"> NEW ARRIVALS</p>
    <p className="p2"> Discover new ways to suprise your loved ones</p>
    <button className="btn btn-danger mr-5 bnt text-white my-2 my-sm-0" type="submit">GIFT NOW</button>
      </div>
  },
  {
    src: Two,
    altText: 'Slide 2',
    caption: <div><p className="choc "> CHOCHOLATE'</p>
    <p className="p22 "> Discover new ways to suprise your loved ones</p>
    <button className="btn btn-danger mr-5 bnt  text-white my-2 my-sm-0" type="submit">GIFT NOW</button></div>
  }
];


function Landing (props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.altText} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

      


export default Landing