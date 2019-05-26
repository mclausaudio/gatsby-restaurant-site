import React from "react"

import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Section } from "../../utils"

import styled from "styled-components"

const GALLERY_IMAGES = graphql`
  {
    aboutGalleryImages: allFile(
      filter: { relativeDirectory: { eq: "aboutGallery" } }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 500, maxHeight: 400) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default function AboutGallery() {
  return (
    <StaticQuery
      query={GALLERY_IMAGES}
      render={data => {
        const images = data.aboutGalleryImages.edges
        return (
          <Section>
            <AboutGalleryWrapper>
              {images.map(item => {
                return (
                  <div className="item">
                    <Img
                      fluid={item.node.childImageSharp.fluid}
                      alt="About Gallery Image"
                    />
                  </div>
                )
              })}
            </AboutGalleryWrapper>
          </Section>
        )
      }}
    />
  )
}

const AboutGalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 1rem;

  .item {
    height: 100%;
  }

  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
