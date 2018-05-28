import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import styled from 'styled-components';

//
// PAGES
import AssistControl from './pages/AssistControl.js'
import Oxygenation from './pages/Oxygenation.js'
import PressureSupport from './pages/PressureSupport.js'
import SIMV from './pages/SIMV.js'
import About from './pages/About.js'

//
// UTILITIES
import YoutubeVideo from './YoutubeVideo.js'
import ScrollToTop from './ScrollToTop.js'

import './App.css'

const Home = () => (
  <div>
    <h3 className="Article-title">Getting started</h3>
    <YoutubeVideo src="uL3VU0XAEFY" />
  </div>
)

const InitialSettings = () => (
  <div>
    <h3 className="Article-title">Initial settings</h3>
    <YoutubeVideo src="2Ez3dmYb9rQ" />
  </div>
)

const TidalVolume = () => (
  <div>
    <h3 className="Article-title">Tidal volume</h3>
    <YoutubeVideo src="Uo43VOkKRXY" />
  </div>
)

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Sidebar = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  width: 12rem;
  background: #f8f9fa;
  z-index: 200;
  position: fixed;
`;

const SidebarFooter = styled.div`
  position: fixed;
  bottom: 20px;
  padding: .5rem 1.5rem;
  width: 12rem;
  font-size: .6rem;
`;

const Content = styled.div`
  padding: 0 4rem;
  margin-left: 240px;
  margin-bottom: 200px;
`;


const App = () => (
  <Router>
    <ScrollToTop>

      <Container>

        <Sidebar>

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
              <li className="nav-item">
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>


          <SidebarFooter>
            Created by Steve Haywood, MD at <a href="http://www.emchatt.com/" target="_blank">UT Chattanooga</a>.
          </SidebarFooter>

        </Sidebar>


        <Content>

          <Route exact path="/" component={Home}/>
          <Route path="/initial-settings" component={InitialSettings}/>
          <Route path="/oxygenation" component={Oxygenation}/>
          <Route path="/tidal-volume" component={TidalVolume}/>
          <Route path="/assist-control" component={AssistControl}/>
          <Route path="/pressure-support" component={PressureSupport}/>
          <Route path="/simv" component={SIMV}/>
          <Route path="/about" component={About}/>

        </Content>

      </Container>

    </ScrollToTop>

  </Router>
)
export default App
