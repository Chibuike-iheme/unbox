import React from "react"



function Subnav(props) {
  return (
    <div class="container">
      <ul className=" mt-3 pt-2 container nav">
        <li className="nav-item">
          <p className="caption">{props.caption}</p>
        </li>
        <li className="nav-item ml-auto ">
          <a className="nav-link active a" data-toggle="tooltip" href="#">See All</a>
        </li>
      </ul>
    </div>
  )
}


export default Subnav