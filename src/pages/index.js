import React from "react"

import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { FaBeer } from "react-icons/fa"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
  </Layout>
)

const ButtonWrapper = styled.button`
  background: blue;
  color: white;
`
export default IndexPage
