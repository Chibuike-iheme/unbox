import React from "react"
import Unbox from './../Assets/unbox.svg';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";




function Footer() {
    return (
        <footer className="mt-5">
            <div className="container">
                <div className="row mb-5 pb-5 ">
                    <div className="col text-center mt-5 pt-4">
                        <a className="" href="#">
                            <img className="" src={Unbox} width="50" height="67.29" alt="logoimage" loading="lazy" />
                        </a>
                        <p className ="">&copy; 2010 - 2020</p>
                        <a  className="text-dark" href="/#" > Privacy - Terms</a>

                    </div>
                    <div class="col ft mt-5 pt-5"></div>
                    <div className="col ft mt-5 pt-5">
                        <a className="font-weight-bold" href="#">
                            ABOUT US
                        </a>
                        <p>
                            You can modify the variables to your own custom values,
                            or just use the mixins with their default values
                        </p>
                    </div>
                    <div className="col ft mt-5 pt-5">
                        <a className="font-weight-bold" href="#">
                            CONTACT US
                        </a>
                        <p>
                            You can modify the variables to your own custom values,
                            or just use the mixins with their default values
                        </p>
                    </div>
                    <div className="col ft mt-5 pt-5">
                        <a className="font-weight-bold" href="#">
                            ORDER STATUS
                        </a>
                        <p>
                            You can modify the variables to your own custom values,
                            or just use the mixins with their default values.
                        </p>
                    </div>
                    <div className="col ft mt-5 pt-5">
                        <a className="font-weight-bold" href="#">
                            HELP
                        </a>
                        <p>
                            You can modify the variables to your own custom values,
                            or just use the mixins with their default values.
                        </p>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-8 icon ">
                        <li className="d-flex">
                            <ol>
                                <a className="" href="#">
                                    <FaFacebookSquare />
                                </a>
                            </ol>
                            <ol>
                                <a className="" href="#">
                                    <FaInstagram />
                                </a>
                            </ol>
                            <ol>
                                <a className="" href="#">
                                    <FaTwitter />
                                </a>
                            </ol>
                        </li>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer