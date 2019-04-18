import React, { Component } from "react"

import NavbarHeader from "./NavbarHeader"
import NavbarLinks from "./NavbarLinks"
import NavbarIcons from "./NavbarIcons"

import styled from "styled-components"

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navbarOpen: false,
    }
  }

  handleNavbar = () => {
    this.setState({
      navbarOpen: !this.state.navbarOpen,
    })
  }

  //tutorial way below, setState returning function, rather than new state oibj?
  // handleNavbar = () => {
  //   this.setState(() => {
  //     return { navbarOpen: !this.state.navbarOpen }
  //   })
  // }
  render() {
    return (
      <NavWrapper>
        <NavbarHeader handleNavbar={this.handleNavbar} />
        <NavbarLinks navbarOpen={this.state.navbarOpen} />
        <NavbarIcons />
      </NavWrapper>
    )
  }
}

// Media queries are slightly different in styled components
const NavWrapper = styled.nav`
  @media (min-width: 769px) {
    display: flex;
    align-items: center;
  }
`
