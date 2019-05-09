import React from "react"

import Product from "./Product"

import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import { SectionButton, Title, Section } from "../../utils"

import styled from "styled-components"

// const PRODUCTS = graphql`
//   {
//     items: allContentfulMenu {
//       edges {
//         node {
//           name
//           price
//           id
//           ingredients
//           img {
//             fixed(width: 150, height: 150) {
//               ...GatsbyContentfulFixed_tracedSVG
//             }
//           }
//         }
//       }
//     }
//   }
// `

export default function Menu() {
  return (
    <Section>
      <Title title="featured items" subtitle="our popular bites" />
      <ProductList>
        <h1>Hello</h1>
        {/* <StaticQuery query={PRODUCTS} render={data => console.log(data)} /> */}
      </ProductList>
    </Section>
  )
}

const ProductList = styled.div``
