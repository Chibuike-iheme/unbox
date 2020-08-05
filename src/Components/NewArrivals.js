import React from "react"
import Navvbar from './Navvbar'
import Gallery4 from './Gallery4'
import Footer from './Footer'
import Pagination from './Pagination'


function NewArrivals() {
    return (
        <>
            <Navvbar />
            <section >
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <p class=" text-center text-white" style={{ fontSize: "48px", fontWeight: "600" }}>
                    &nbsp;&nbsp;NEW IN
                </p>
                <br /><br /><br />
                <div class=" ">
                    <div class="container mx-5 p-3  text-center"
                        style={{
                            fontWeight: "600", fontSize: "18px", width: "257px", backgroundColor: "#F7EDED",
                            color: "#BB1928", borderRadius: "3px"
                        }}>
                        HOME / NEW IN
                    </div>
                </div>
            </section>
            <div>
                <Gallery4 />
            </div>
            <Pagination />
            <Footer />
        </>
    )
}


export default NewArrivals