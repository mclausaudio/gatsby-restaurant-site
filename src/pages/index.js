import React from "react"

import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHeader, Banner, BannerButton } from "../utils"

import image from "../images/bcg/homeBcg.jpeg"

import QuickInfo from "../components/HomepageComponents/QuickInfo"
import Gallery from "../components/HomepageComponents/Gallery"
import Menu from "../components/HomepageComponents/Menu"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader image={image}>
      <Banner title="eatery" subtitle="best food">
        <BannerButton style={{ margin: "2rem auto" }}>menu</BannerButton>
      </Banner>
    </HomeHeader>
    <QuickInfo />
    <Gallery />
    <Menu />
  </Layout>
)

const ButtonWrapper = styled.button`
  background: blue;
  color: white;
`
export default IndexPage
