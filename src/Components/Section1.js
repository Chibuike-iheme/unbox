import React from 'react';
import One from './../Assets/1.png';
// import Two from './../Assets/2.svg';



function Section() {
  return (
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={One} class="img-fluid d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block text-left">
            <p class="new"> NEW ARRIVALS</p>
            <p class="p2"> Discover new ways to suprise your loved ones</p>
            <button class="btn bnt btn-danger text-white my-2 my-sm-0" type="submit">GIFT NOW</button>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://res.cloudinary.com/dpakfqwzp/image/upload/q_auto:low/v1595176414/unbox/2_ftsrif.svg" class="img-fluid d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block text-left">
            <p class="choc "> CHOCHOLATE'</p>
            <p class="p22 "> Discover new ways to suprise your loved ones</p>
            <button class="btn bnt btn-danger  text-white my-2 my-sm-0" type="submit">GIFT NOW</button>
          </div>
        </div>
      </div>
    </div>
  )
}




export default Section