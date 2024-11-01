import React from 'react'

import {
    Header , Footer , ServicesLine , Inner , Faq , Bio
} from '../components'

const ServicesPage = () => {
  return (
    <>
    <Header />
    <Inner title="Services" first="Home" secend="Services"/>
    <Bio />
    <ServicesLine />
    <Faq />
    <Footer />
    </>
  )
}

export default ServicesPage