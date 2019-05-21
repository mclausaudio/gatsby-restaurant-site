import React from "react"

import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHeader, Banner, BannerButton } from "../utils"

import image from "../images/bcg/homeBcg.jpeg"

import { Link } from "gatsby"

import QuickInfo from "../components/HomepageComponents/QuickInfo"
import Gallery from "../components/HomepageComponents/Gallery"
import Menu from "../components/HomepageComponents/Menu"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader image={image}>
      <Banner
        title="eatery"
        subtitle="1234 9th Ave & 4321 12th St, San Francisco CA"
      >
        <BannerButtonWrapper>
          <Link to="/menu" style={{ textDecoration: "none" }}>
            <BannerButton style={{ margin: "1.7rem 0.8rem" }}>
              menu
            </BannerButton>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <BannerButton style={{ margin: "1.7rem 0.8rem" }}>
              contact
            </BannerButton>
          </Link>
        </BannerButtonWrapper>
      </Banner>
    </HomeHeader>
    <QuickInfo />
    <Gallery />
    <Menu />
  </Layout>
)

const BannerButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const ButtonWrapper = styled.button`
  background: blue;
  color: white;
`
export default IndexPage
