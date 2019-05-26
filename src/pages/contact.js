import React from "react"

import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { PageHeader, SectionButton, Banner, Title, Section } from "../utils"

import contactImage from "../images/bcg/contactBcg.jpeg"

import ContactButton from "../components/ContactComponents/ContactButton"
import Locations from "../components/ContactComponents/Locations"

const ContactPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader image={contactImage}>
      <Banner title="Contact us" subtitle="Let's get in touch" />
    </PageHeader>
    <Section>
      <Title title="Contact" />
      <ContactText>
        <p>
          Give one of our locations a call to make reservations or to place an
          order for pickup or delivery.
        </p>
        <h3>We also do catering!</h3>
      </ContactText>
      <ContactButton />
      <Locations />
    </Section>
  </Layout>
)

const ContactText = styled.div`
  padding: 1rem;
  * {
    text-align: center;
  }
  h3 {
    font-weight: 300;
  }
`

export default ContactPage
