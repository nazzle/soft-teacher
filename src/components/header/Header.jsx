import React from 'react'
import './header.css'
import LOGO from '../../assets/img/st-blue.png'

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
                <li className="active"><a href="#intro">Home</a></li>
                <li><a href="#about">About App</a></li>
                <li><a href="#about">Mission & Vision</a></li>
                <li><a href="#services">Key Features</a></li>
                <li><a href="#portfolio">Snapshots</a></li>
                <li className="drop-down"><a href>Downloads</a>
                <ul>
                    <li><a href="#">Drop Down 1</a></li>
                    <li className="drop-down"><a href="#">Drop Down 2</a>
                    <ul>
                        <li><a href="#">Deep Drop Down 1</a></li>
                        <li><a href="#">Deep Drop Down 2</a></li>
                        <li><a href="#">Deep Drop Down 3</a></li>
                        <li><a href="#">Deep Drop Down 4</a></li>
                        <li><a href="#">Deep Drop Down 5</a></li>
                    </ul>
                    </li>
                    <li><a href="#">Drop Down 3</a></li>
                    <li><a href="#">Drop Down 4</a></li>
                    <li><a href="#">Drop Down 5</a></li>
                </ul>
                </li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
            </nav>
        </div>
        </header>
    </>
  )
}

export default Header