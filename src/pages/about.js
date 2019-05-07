import React from "react"

import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"

import aboutImage from "../images/bcg/aboutBcg.jpeg"

import { FaBeer } from "react-icons/fa"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader image={aboutImage}>
      <Banner title="about" subtitle="more info about us" />
    </PageHeader>
  </Layout>
)

export default AboutPage
