import React from "react"
import Navvbar from './Navvbar'
import Footer from './Footer'
import { FiChevronDown } from "react-icons/fi";


function Landing() {
    return (
        <>
            <Navvbar />
            <div className="container my-5">
                <div class="card mb-3 border border-0" >
                    <div class="container row no-gutters">
                        <div class="col-md-7">
                            <img style={{ borderRadius: "7.44px" }} src="https://res.cloudinary.com/dpakfqwzp/image/upload/q_auto:low/v1595783613/unbox/rv3_khb2nn.png" class="card-img img-fluid" alt="..." />
                        </div>
                        <div class="col-md-5">
                            <h5 class="card-title ml-4" style={{ color: "#BB1928", fontSize: "24px", fontWeight: "600" }}>THE BASKET OF GOODIES</h5>
                            <p class="card-text ml-4" style={{ color: "#BB1928", fontSize: "14px", fontWeight: "600" }}>NGN 10,000</p>
                            <div class="card-body ml-4" style={{ borderRadius: "5px", backgroundColor: "#FDF5F5", color: "#BB1928" }}>
                                <p class="card-text" style={{ color: "#BB1928", fontSize: "14px", fontWeight: "600" }}>DESCRIPTION</p>
                                <p class="card-text mb-5" style={{ color: "#BB1928", fontSize: "13px", fontWeight: "normal" }} >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra enim
                                    nec elementum eget tortor, facilisis tincidunt. Condimentum neque,
                                    magna quis mattis fermentum, erat arcu in malesuada. Nunc, platea
                                    aliquam eget ullamcorper at facilisi consectetur sed lectus.
                                </p>
                            </div>
                            <div class="container" >
                                <p>
                                    <button class=" text-left shadow-sm ml-4 mt-4 btn btn-lg btn-block" style={{ backgroundColor: "#FDF5F5", borderRadius: "5px", color: "#BB1928", fontSize: "14px", fontWeight: "600" }} type="button" data-toggle="collapse" data-target="#multiCollapseExample1" aria-expanded="false" aria-controls="multiCollapseExample1">
                                        WRAPPING STYLE
                                       <span class="float-right">
                                            <FiChevronDown style={{ fontSize: "24px" }} />
                                        </span>
                                    </button>
                                </p>
                                <div class="row">
                                    <div class="col">
                                        <div class="collapse multi-collapse" id="multiCollapseExample1">
                                            <div class="card card-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type="button" class="btn shadow-sm btn-lg btn-block mt-5 ml- " style={{ backgroundColor: "#BB1928", borderRadius: "5px", color: "white", fontSize: "14px", fontWeight: "600" }}>SEND AS A GIFT</button>
                                <button type="button" class="btn shadow-sm btn-lg btn-block ml-" style={{ backgroundColor: "#FDF5F5", borderRadius: "5px", color: "#BB1928", fontSize: "14px", fontWeight: "600" }}>GIFT YOURSELF</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}


export default Landing