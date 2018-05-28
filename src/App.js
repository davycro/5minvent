import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import styled from 'styled-components';

//
// Layout
import Navigation from './Navigation.js'

//
// PAGES
import AssistControl from './pages/AssistControl.js'
import Oxygenation from './pages/Oxygenation.js'
import PressureSupport from './pages/PressureSupport.js'
import SIMV from './pages/SIMV.js'
import About from './pages/About.js'
import Article from './pages/Article.js'

//
// UTILITIES
import YoutubeVideo from './YoutubeVideo.js'
import ScrollToTop from './ScrollToTop.js'

import './App.css'

const Home = () => (
  <Article title="Own the ventilator"
    youtubeSrc="uL3VU0XAEFY" />
)

const InitialSettings = () => (
  <Article title="Initial settings"
    youtubeSrc="2Ez3dmYb9rQ" />
)

const TidalVolume = () => (
  <Article title="Tidal volume"
    youtubeSrc="Uo43VOkKRXY" />
)

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const App = () => (
  <Router>
    <ScrollToTop>

      <Container>

        <Navigation />

        <Route exact path="/" component={Home}/>
        <Route path="/initial-settings" component={InitialSettings}/>
        <Route path="/oxygenation" component={Oxygenation}/>
        <Route path="/tidal-volume" component={TidalVolume}/>
        <Route path="/assist-control" component={AssistControl}/>
        <Route path="/pressure-support" component={PressureSupport}/>
        <Route path="/simv" component={SIMV}/>
        <Route path="/about" component={About}/>


      </Container>

    </ScrollToTop>

  </Router>
)
export default App
