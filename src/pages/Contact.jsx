import React from 'react'

import {
    Header , Footer , Inner , ContactPageContent
} from '../components'

const Contact = () => {
  return (
    <>
        <Header />
        <Inner title="Get In Touch" first="Home" secend="Contact" contact="Yes"/>
        <ContactPageContent />
        <Footer />
    </>
  )
}

export default Contact