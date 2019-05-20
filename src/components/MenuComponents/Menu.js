import React, { Component } from "react"

import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Section, Title } from "../../utils"

import MenuItemsContainer from "./MenuItemsContainer"

const GET_MENU = graphql`
  {
    menuItems: allContentfulMenuItem {
      edges {
        node {
          name
          price
          ingredients
          image {
            fixed {
              src
            }
          }
          categoryList
        }
      }
    }
  }
`

export default class Menu extends Component {
  render() {
    return (
      <Section>
        <Title title="menu" subtitle="neighborhood favorites" />
        <StaticQuery
          query={GET_MENU}
          render={data => {
            const menuItems = data.menuItems.edges
            console.log(menuItems, "menuItems from Menu.js")
            return <MenuItemsContainer menuItems={menuItems} />
          }}
        />
      </Section>
    )
  }
}

const MenuItemWrapper = styled.div``
