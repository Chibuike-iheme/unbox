import React from "react"
import Card from './Card'
import Bs1 from './../Assets/bs1.svg';
import Bs2 from './../Assets/bs2.svg';
import Bs3 from './../Assets/bs3.svg';
import Bs4 from './../Assets/bs4.svg';

function Gallery1 () {
  return (
    <div>
      <Card
        image1={Bs1}
        image2={Bs2}
        image3={Bs3}
        image4={Bs4}
      />
    </div>
    )
}


export default Gallery1