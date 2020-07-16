import React from "react"
import Card from './Card'
import Fm1 from './../Assets/fm1.svg';
import Fm2 from './../Assets/fm2.svg';
import Fm3 from './../Assets/fm3.svg';
import Fm4 from './../Assets/fm4.svg';


function Gallery3(props) {
  return (
    <div>
    <Card
      image1={Fm1}
      image2={Fm2}
      image3={Fm3}
      image4={Fm4}
    />
    </div>
    )
}


export default Gallery3