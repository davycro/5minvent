import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

//
// PAGES
import AssistControl from './pages/AssistControl.js'
import Oxygenation from './pages/Oxygenation.js'
import PressureSupport from './pages/PressureSupport.js'
import SIMV from './pages/SIMV.js'

//
// UTILITIES
import YoutubeVideo from './YoutubeVideo.js'
import ScrollToTop from './ScrollToTop.js'

import './App.css'

const Home = () => (
  <div className="Article">
    <h3 className="Article-title">Getting started</h3>
    <YoutubeVideo src="uL3VU0XAEFY" />
  </div>
)

const InitialSettings = () => (
  <div className="Article">
    <h3 className="Article-title">Initial settings</h3>
    <YoutubeVideo src="2Ez3dmYb9rQ" />
  </div>
)

const TidalVolume = () => (
  <div className="Article">
    <h3 className="Article-title">Tidal volume</h3>
    <YoutubeVideo src="Uo43VOkKRXY" />
  </div>
)


const App = () => (
  <Router>
    <ScrollToTop>

      <div className="App-container">

        <aside className="App-sidebar">
          <Link to="/" className="App-brand">
            <div className="Brand-logo"></div>
            <div className="Brand-text">5 Minute Vent</div>
          </Link>
          <div className="App-sidebar-nav">
            <ul className="nav">
              <li className="nav-item">
                <Link to="/initial-settings">Initial Settings</Link>
              </li>
              <li className="nav-item">
                <Link to="/oxygenation">Oxygenation</Link>
              </li>
              <li className="nav-item">
                <Link to="/tidal-volume">Tidal Volume</Link>
              </li>
              <li className="nav-item">
                <Link to="/assist-control">Assist Control</Link>
              </li>
              <li className="nav-item">
                <Link to="/pressure-support">Pressure Support</Link>
              </li>
              <li className="nav-item">
                <Link to="/simv">SIMV</Link>
              </li>
            </ul>
          </div>
        </aside>



        <Route exact path="/" component={Home}/>
        <Route path="/initial-settings" component={InitialSettings}/>
        <Route path="/oxygenation" component={Oxygenation}/>
        <Route path="/tidal-volume" component={TidalVolume}/>
        <Route path="/assist-control" component={AssistControl}/>
        <Route path="/pressure-support" component={PressureSupport}/>
        <Route path="/simv" component={SIMV}/>

      </div>

    </ScrollToTop>

  </Router>
)
export default App
