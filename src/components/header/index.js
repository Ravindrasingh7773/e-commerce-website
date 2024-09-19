import React, { Fragment } from 'react'
import styles from "./style.module.css"
import OfferBar from './offerBar'
import Topbar from './topbar'

const Header = () => {
  return (
    <Fragment>
        <OfferBar/>
        <Topbar />
    </Fragment>
  )
}

export default Header;