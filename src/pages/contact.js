import React from "react"

import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { PageHeader, Banner } from "../utils"

import contactImage from "../images/bcg/contactBcg.jpeg"

const ContactPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader image={contactImage}>
      <Banner title="Contact us" subtitle="Let's get in touch" />
    </PageHeader>
  </Layout>
)

export default ContactPage
