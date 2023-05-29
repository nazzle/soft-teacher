import React from 'react'
import Header from './components/header/Header'
import Intro from './components/intro/Intro'
import About from './components/about/About'
import Features from './components/features/Features'
import Choose from './components/choose/Choose'
import Mission from './components/mission/Mission'
import Snapshots from './components/snapshots/Snapshots'
import Footer from './components/footer/Footer'
// BOOTSTRAP CSS FILE
import './assets/lib/bootstrap/css/bootstrap.min.css'
// Libraries CSS Files
import './assets/lib/font-awesome/css/font-awesome.min.css'
import './assets/lib/animate/animate.min.css'
import './assets/lib/ionicons/css/ionicons.min.css'
import './assets/lib/owlcarousel/assets/owl.carousel.min.css'
import './assets/lib/lightbox/css/lightbox.min.css'
// Main Stylesheet File
import './assets/css/style.css'

const App = () => {
  return (
    <>
    <Header />
    <Intro />
    <main id="main">
      <About />
      <Mission />
      <Features />
      <Choose />
      <Snapshots />
    </main>
    <Footer />
    </>
  )
}

export default App