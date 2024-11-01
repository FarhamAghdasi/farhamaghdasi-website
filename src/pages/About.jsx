import React from 'react'

import {
    Header , Footer , Inner , About , Skills
} from '../components'

const AboutPage = () => {
  return (
    <>
    <Header />
    <Inner title="About Me" first="Home" secend="About Farham Aghdasi"/>
    <About />
    <Skills />
    <Footer />
    </>
  )
}

export default AboutPage