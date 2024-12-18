import React from 'react'

import {
    Header, Footer, Inner
} from '../components';

const NotFound = () => {
  return (
    <>
          <Header />
          <Inner title="Error 404" first="Home" secend="404 Error " paragraph="The page you are looking for does not exist"/>
          <Footer />
    </>
  )
}

export default NotFound