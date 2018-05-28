import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import styled from 'styled-components';


const Footer = styled.div`

  display: none;

  //
  // Only display on large screen
  @media only screen and (min-width: 601px) {
    display: block;
    position: fixed;
    bottom: 20px;
    padding: .5rem 1.5rem;
    width: 12rem;
    font-size: .6rem;
  }
`;

const Container = styled.div`

  background: #f8f9fa;
  padding: .5rem 1rem;
  width: 100%;

  //
  // large screen style = fixed sidebar
  @media only screen and (min-width: 601px) {
    height: 100%;
    width: 12rem;
    z-index: 200;
    position: fixed;
    padding: 0;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const BrandIcon = styled.div`
  display: none;

  @media only screen and (min-width: 601px) {
    display: block;
    background-image: url("/logoPurple.png");
    background-repeat: no-repeat;
    background-size: 60px;
    width: 70px;
    height: 50px;
    margin-left: 0.5rem;
  }
`;

const BrandText = styled.div`

  font-weight: 700;

  @media only screen and (min-width: 601px) {
    width: 70px;
    margin-top: 2px;
  }
`;

const BrandLink = styled(Link)`

  @media only screen and (min-width: 601px) {
    color: #5755d9;
    left: 1.5rem;
    position: fixed;
    top: .85rem;
    display: flex;
  }
`

const NavigationList = styled.ul`

  display: ${props => props.visible ? 'block' : 'none'}

  list-style: none;

  @media only screen and (min-width: 601px) {
    display: flex;
    flex-direction: column;
    margin: .2rem 0;
    padding: .5rem 1.5rem;
    position: fixed;
    top: 3.5rem;
    width: 12rem;
  }
`;

const ListItem = styled.li`

  @media only screen and (min-width: 601px) {

    a {
      color: #667189;
      padding: .2rem .4rem;
      text-decoration: none;

      &:focus,
      &:hover {
        color: #5755d9;
      }
    }

  }
`;

const MenuButton = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #fff;
  border: .05rem solid #5755d9;
  border-radius: .1rem;
  color: #5755d9;
  cursor: pointer;
  display: inline-block;
  font-size: .8rem;
  height: 1.8rem;
  line-height: 1rem;
  outline: none;
  padding: .35rem .4rem;
  text-align: center;
  text-decoration: none;
  transition: all .2s ease;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;

  margin-left: auto;

  &:hover {
    background: #f1f1fc;
    border-color: #4b48d6;
    text-decoration: none;
  }

  @media only screen and (min-width: 601px) {
    display: none;
  }
`;


class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menuVisible: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({menuVisible: !this.state.menuVisible});
  }

  render() {

    return(
      <Container>

        <Header>
          <BrandLink to="/">
            <BrandIcon />
            <BrandText>5 Minute Vent</BrandText>
          </BrandLink>

          <MenuButton onClick={this.toggleMenu}>
            { this.state.menuVisible ? "Hide" : "View topics" }
          </MenuButton>
        </Header>

        <NavigationList visible={this.state.menuVisible} onClick={this.toggleMenu}>
          <ListItem>
            <Link to="/initial-settings">Initial Settings</Link>
          </ListItem>
          <ListItem>
            <Link to="/oxygenation">Oxygenation</Link>
          </ListItem>
          <ListItem>
            <Link to="/tidal-volume">Tidal Volume</Link>
          </ListItem>
          <ListItem>
            <Link to="/assist-control">Assist Control</Link>
          </ListItem>
          <ListItem>
            <Link to="/pressure-support">Pressure Support</Link>
          </ListItem>
          <ListItem>
            <Link to="/simv">SIMV</Link>
          </ListItem>
          <ListItem>
            <Link to="/about">About</Link>
          </ListItem>
        </NavigationList>

        <Footer>
          Created by Steve Haywood, MD at <a href="http://www.emchatt.com/" target="_blank">UT Chattanooga</a>.
        </Footer>

      </Container>
    )
  }
}



export default Navigation;
