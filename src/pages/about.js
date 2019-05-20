import React from "react"

import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { styles, PageHeader, Banner, Title, Section } from "../utils"

import aboutImage from "../images/bcg/aboutBcg.jpeg"

import AboutText from "../components/AboutComponents/AboutText"
import AboutGallery from "../components/AboutComponents/AboutGallery"
import AwardSection from "../components/AboutComponents/AwardSection"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader image={aboutImage}>
      <Banner title="about" subtitle="Learn more" />
    </PageHeader>
    <Section />
    <Title title="a neighborhood favorite" subtitle="get to know us" />
    <AwardSection />
    <AboutText />
    <AboutGallery />
  </Layout>
)

export default AboutPage
