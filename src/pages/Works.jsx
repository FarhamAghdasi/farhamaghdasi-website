import React from 'react'

import {
    Header , Footer , Inner , Portfolio
} from '../components'

const WorksPage = () => {
  return (
    <>
    <Header />
    <Inner title="My Works" first="Home" secend="Works" paragraph="Also You Can See My" links="HTML Templates"/>
    <Portfolio />
    <Footer />
    </>
  )
}

export default WorksPage