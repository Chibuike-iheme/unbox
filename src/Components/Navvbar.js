import React from 'react';
import Unbox from '../Assets/unbox.svg';
import { FiMenu }  from "react-icons/fi";
import { FiSearch }  from "react-icons/fi";


function Navvbar() {
  return (

    <div>
      <nav class="navbar navbar-expand-lg sticky-top bg-custom-1">
        <a class="navbar-brand font-weight-bold" href="/">
          <img src={Unbox} width="50" height="50" class="d-inline-block align-top" alt="" loading="lazy" />
        </a>
        <button class="navbar-toggler"  type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <FiMenu style={{ color: "#BB1928", width: "30px", height:"30px" }}/>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav m-auto mt-2 mt-lg-0">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                CATEGORY
               </a>
              <div class="dropdown-menu " style={{ fontSize:"12px", backgroundColor: "#F7EDED", color: "#BB1928", width: "340px" }} aria-labelledby="navbarDropdown">
                <table class="table table-borderless">
                  <tbody class="">
                    <tr>
                      <td><a class="a" href="/NewArrivals">NEW IN</a></td>
                      <td><a class="a" href="#">BLOG</a></td>
                      <td><a class="a" href="#">BLOG</a></td>
                    </tr>
                    <tr>
                      <td><a class="a" href="#">BEST SELLER</a></td>
                      <td><a class="a" href="#">BEST SELLER</a></td>
                      <td><a class="a" href="#">BEST SELLER</a></td>
                    </tr>
                    <tr>
                      <td><a class="a" href="#">FOR HIM</a></td>
                      <td><a class="a" href="#">FOR HIM</a></td>
                      <td><a class="a" href="#">FOR HIM</a></td>
                    </tr>
                    <tr>
                      <td><a class="a" href="#">FOR HER</a></td>
                      <td><a class="a" href="#">FOR HER</a></td>
                      <td><a class="a" href="#">FOR HER</a></td>
                    </tr>
                    <tr>
                      <td><a class="a" href="#">PRICING</a></td>
                      <td><a class="a" href="#">PRICING</a></td>
                      <td><a class="a" href="#">PRICING</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control search mr-sm-2 text-danger" type="search" placeholder="Search Unbox" aria-label="Search" />
            <button class="btn btn-outline-danger" type="submit">
              <FiSearch />
            </button>
          </form>
          <ul class="navbar-nav m-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#">HELP<span class="sr-only">(current)</span></a>
            </li>
          </ul>
          <button type="button" class="btn btn-danger">SIGN UP</button>
        </div>
      </nav>
    </div>

  )
}

export default Navvbar