import React from 'react'
import "../screens/DefaultPage.css"
import MyNavigation from '../components/MyNavegation.jsx'
import Title from './Title'
import Portifolio from './Portifolio'
import AboutUs from './AboutUs'
import Contact from './Contact'

export default function DefaultPage() {
  return (
    <div>
      <div class="outer-wrapper">
        <div class="wrapper">
          <div class="navbar">
            <MyNavigation></MyNavigation>
          </div>

          <div id="titulo" class="slide one">
            <Title />
          </div>
          <div id="portifolio" class="slide portifolio">
            <Portifolio />
          </div>
          <div id="sobrenos" class="slide aboutus">
            <AboutUs />
          </div>
          <div id="contato" class="slide contact">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  )
}