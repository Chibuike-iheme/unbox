import React from "react"




function Card2 (props) { 
  return (
    <div className="">
      <div className="row row-cols-1 row-cols-md-3">
        <div className="col mb-4">
          <div className="card bg-dark h-100">
            <a href="/#">
              <img src={props.imageA} width="300" height="360" className="img-fluid card-img-top" alt="..." />
            </a>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card bg-dark h-100">
            <a href="/#">
              <img src={props.imageB} width="300" height="360" className="img-fluid card-img-top" alt="..." />
            </a>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card bg-dark h-100">
            <a href="/#">
              <img src={props.imageC} width="300" height="360" className="img-fluid card-img-top" alt="..." />
            </a>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card bg-dark h-100">
            <a href="/#">
              <img src={props.imageD} width="300" height="360" className=" img-fluid card-img-top" alt="..." />
            </a>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card bg-dark h-100">
            <a href="/#">
              <img src={props.imageE} width="300" height="360" className=" img-fluid card-img-top" alt="..." />
            </a>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card bg-dark h-100">
            <a href="/#">
              <img src={props.imageF} width="300" height="360" className=" img-fluid card-img-top" alt="..." />
            </a>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card bg-dark h-100">
            <a href="/#">
              <img src={props.imageG} width="300" height="360" className=" img-fluid card-img-top" alt="..." />
            </a>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card bg-dark h-100">
            <a href="/#">
              <img src={props.imageH} width="300" height="360" className=" img-fluid card-img-top" alt="..." />
            </a>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card bg-dark h-100">
            <a href="/#">
              <img src={props.imageI} width="300" height="360" className=" img-fluid card-img-top" alt="..." />
            </a>
          </div>
        </div>
      </div>
     </div>
    )
}


export default Card2