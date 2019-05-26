import React from "react"

import styled from "styled-components"
import { styles } from "./index"

import Img from "gatsby-image"

// destructring the product off of props, so we don't have to keep writing props.product
export default function Product({ product }) {
  const { name, price, ingredients } = product
  const { fixed } = product.image
  return (
    <ProductWrapper>
      <Img fixed={fixed} className="img" />
      <div className="text">
        <div className="product-content">
          <h3 className="name">{name}</h3>
          <h3 className="price">{price}</h3>
        </div>
        <p className="info">{ingredients}</p>
      </div>
    </ProductWrapper>
  )
}

const ProductWrapper = styled.div`
  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 1rem;
  }
  .img {
    border-radius: 0.5rem;
  }
  .product-content {
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;
    text-transform: uppercase;
  }
  .name,
  .price {
    color: ${styles.colors.mainYellow};
    margin-top: 0.5rem;
  }
  .info {
    margin-top: 0.5rem;
    word-spacing: 0.3rem;
    text-transform: lowercase;
  }
`
export const ProductList = styled.div`
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
