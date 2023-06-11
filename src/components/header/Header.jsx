import React, {useState} from 'react'
import './header.css'
import LOGO from '../../assets/img/st-blue.png'
import HeaderNavsAPI from "./HeaderNavsAPI";

const Header = () => {
  return (
    <>
        <header id="header" className="fixed-top">
        <div className="container">
            <div className="logo float-left">
            {/* <h1 class="text-light"><a href="#header"><span>NewBiz</span></a></h1> */}
            <a href="#intro" className="scrollto"><img src={LOGO} alt="" className="img-fluid" /></a>
            </div>
            <nav className="main-nav float-right d-none d-lg-block">
            <ul>
                <HeaderNavsAPI />
            </ul>
            </nav>
        </div>
        </header>
    </>
  )
}

export default Header