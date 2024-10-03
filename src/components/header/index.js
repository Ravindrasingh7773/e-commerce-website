import React, { Fragment } from 'react' 
import OfferBar from './offerBar'
import Topbar from './topbar'
import SearchBar from './searchBar'
import Navbar from './navbar'

const Header = () => {
  return (
    <Fragment>
        <OfferBar/>
        <Topbar />
        <SearchBar/>
        <Navbar />
    </Fragment>
  )
}

export default Header;