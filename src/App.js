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
import InitialSettings from './pages/InitialSettings.js'
import TidalVolume from './pages/TidalVolume.js'
import Home from './pages/Home.js'

//
// UTILITIES
import YoutubeVideo from './YoutubeVideo.js'
import ScrollToTop from './ScrollToTop.js'

import './App.css'


const Container = styled.div`
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
