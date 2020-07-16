import React from "react"
import Navvbar from './Navvbar'
import Section1 from './Section1'
import Subnav from './Subnav'
import Gallery1 from './Gallery1'
import Gallery2 from './Gallery2'
import Gallery3 from './Gallery3'
import Footer from './Footer'


function Landing () {
    return (
        <>
           <Navvbar />
           <Section1 />
            <div className="mb-5">
                <Subnav caption="Best Sellers" />
                <Gallery1 />
                <Subnav caption="For Him" />
                <Gallery2 />
                <Subnav caption="For Her" />
                <Gallery3 />
            </div>
           <Footer />
        </>
    )
}


export default Landing