import React from "react"



function Card (props) { 
  return (
    <div className=" mx-2">
      <div className="row row-cols-2 row-cols-md-4">
        <div className="col mb-4">
          <div className="card bg-dark h-100">
            <a href="/GiftOut">
              <img src={props.image1} width="300" height="360" className=" img-fluid card-img-top" alt="..." />
            </a>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card bg-dark h-100">
            <a href="/GiftOut">
              <img src={props.image2} width="300" height="360" className="img-fluid card-img-top" alt="..." />
            </a>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card bg-dark h-100">
            <a href="/GiftOut">
              <img src={props.image3} width="300" height="360" className="img-fluid card-img-top" alt="..." />
            </a>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card bg-dark h-100">
            <a href="/GiftOut">
              <img src={props.image4} width="300" height="360" className="img-fluid card-img-top" alt="..." />
            </a>
          </div>
        </div>
      </div>
     </div>
    )
}


export default Card 