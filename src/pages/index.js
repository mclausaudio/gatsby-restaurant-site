import React from "react"

import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { FaBeer } from "react-icons/fa"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h3>Hello from index</h3>
    <ButtonWrapper>Click Me</ButtonWrapper>
    <p>
      <FaBeer />
    </p>
  </Layout>
)

const ButtonWrapper = styled.button`
  background: blue;
  color: white;
`
export default IndexPage
