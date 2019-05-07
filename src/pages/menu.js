import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"

import menuImage from "../images/bcg/menuBcg.jpeg"

const MenuPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader image={menuImage}>
      <Banner title="menu" subtitle="let's dig in" />
    </PageHeader>
  </Layout>
)

export default MenuPage
