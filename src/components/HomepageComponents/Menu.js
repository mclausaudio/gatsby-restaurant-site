import React from "react"

import Product from "./Product"

import { StaticQuery, graphql, Link } from "gatsby"

import { Section, SectionButton, Title } from "../../utils"

import styled from "styled-components"

const PRODUCTS = graphql`
  {
    items: allContentfulMenuItem {
      edges {
        node {
          name
          price
          ingredients
          image {
            fixed(height: 150, width: 150) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default function Menu() {
  return (
    <Section>
      <Title title="featured items" subtitle="popular bites" />
      <ProductList>
        <StaticQuery
          query={PRODUCTS}
          render={data => {
            const products = data.items.edges
            return products.map(item => {
              return <Product key={item.node.id} product={item.node} />
            })
          }}
        />
      </ProductList>
      <Link to="/menu" style={{ textDecoration: "none" }}>
        <SectionButton style={{ margin: "2rem auto" }}>menu</SectionButton>
      </Link>
    </Section>
  )
}

const ProductList = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 3rem;

  @media (min-width: 576px) {
    grid-template-columns: 95%;
  }

  @media (min-width: 776px) {
    grid-template-columns: 80%;
    justify-content: center;
  }

  @media (min-width: 992px) {
    /* 1fr 1fr -- working with fractions, so this means it would be 2 coloumns */
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
`
