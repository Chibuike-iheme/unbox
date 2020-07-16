import React from "react"
import Card from './Card'
import Fh1 from './../Assets/fh1.svg';
import Fh2 from './../Assets/fh2.svg';
import Fh3 from './../Assets/fh3.svg';
import Fh4 from './../Assets/fh4.svg';

function Gallery2 (props) {
  return (
    <div>
    <Card
      image1={Fh1}
      image2={Fh2}
      image3={Fh3}
      image4={Fh4}
    />
    </div>
    )
}


export default Gallery2 