import React, { Component } from "react"

import styled from "styled-components"

import { SectionButton } from "../../utils"

const getCategories = items => {
  let tempItems = items.map(items => {
    return items.node.categoryList
  })
  console.log("tempItems", tempItems)
  let tempCategories = []
  tempItems.map(item => {
    console.log(typeof item)
    if (typeof item === "object") {
      item.map(cat => {
        if (tempCategories.indexOf(cat) < 0) {
          tempCategories.push(cat)
        }
      })
    }
  })
  let categories = Array.from(tempCategories)
  categories = ["all", ...categories]
  return categories
}

export default class MenuItemsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuItems: props.menuItems,
      displayedItems: props.menuItems,
      categories: getCategories(props.menuItems),
    }
  }

  handleItems = cat => {
    let tempItems = [...this.state.menuItems]
    if (cat === "all") {
      this.setState({
        displayedItems: tempItems,
      })
    } else {
      console.log("tempItems from inside handleItems", tempItems)
      let items = tempItems.filter(({ node }) => {
        console.log(node.name)
        return node.categoryList.indexOf(cat) >= 0
      })
      this.setState({
        displayedItems: items,
      })
    }
  }

  render() {
    const displayedItems = this.state.displayedItems
    return (
      <div>
        <CategoryButtonWrapper>
          {this.state.categories.map((cat, index) => {
            return (
              <SectionButton key={index} onClick={() => this.handleItems(cat)}>
                {cat}
              </SectionButton>
            )
          })}
        </CategoryButtonWrapper>
        {displayedItems.map(item => {
          console.log(item)
          return <p>{item.node.name}</p>
        })}
      </div>
    )
  }
}

const CategoryButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
