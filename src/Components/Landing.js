import React from "react"
import Navvbar from './Navvbar'
import Section1 from './Section1'
import Subnav from './Subnav'
import Gallery1 from './Gallery1'
import Gallery2 from './Gallery2'
import Gallery3 from './Gallery3'
import Footer from './Footer'
import Pagination from './Pagination'


function Landing() {
    return (
        <>
            <Navvbar />
            <Section1 />
            <div className=" container">
                <Subnav caption="Best Sellers" />
                <Gallery1 />
                <Subnav caption="For Him" />
                <Gallery2 />
                <Subnav caption="For Her" />
                <Gallery3 />
            </div>
            <Pagination />
            <Footer />
        </>
    )
}


export default Landing