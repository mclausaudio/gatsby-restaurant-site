import React from "react"

import styled from "styled-components"
import { styles, Section } from "../../utils"

import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const GET_IMAGES = graphql`
  {
    getImages: allFile(filter: { relativeDirectory: { eq: "homeGallery" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default function Gallery() {
  return (
    <StaticQuery
      query={GET_IMAGES}
      render={data => {
        const images = data.getImages.edges
        const descriptions = [
          "Delicious pizza",
          "tasty pork",
          "beautiful steak",
        ]
        return (
          <Section>
            <GalleryWrapper>
              {/* in this case, each item has a node object, which is the way gatsby graphql returns... if you're ever in doubt just console.log things, its the way the query returnds */}
              {/* So we are doing a bit of destructuring to get just the node object from the item */}
              {images.map(({ node }, index) => {
                return (
                  <div className={`item item-${index + 1}`} key={index}>
                    <Img fluid={node.childImageSharp.fluid} />
                    {/* these are hardcoded, picture stored locally */}
                    {/* If we were using contentful, we could supply any additional info below */}
                    {/* but in this case since the photos are from a folder, we would need an arry ot descrptions to loop over as well */}
                    <p className="info">{descriptions[index]}</p>
                  </div>
                )
              })}
            </GalleryWrapper>
          </Section>
        )
      }}
    />
  )
}
// We utilize CSS GRIDS
const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 1rem;
  .item {
    position: relative;
  }

  .info {
    position: absolute;
    top: 0;
    left: 0;
    background: ${styles.colors.mainYellow};
    padding: 0.1rem 0.3rem;
    text-transform: capitalize;
  }
  /* above is for smallest screen size, below starts at 576 */
  /* so in other words, if min width is 576 or greater */
  @media (min-width: 576px) {
    /* below is fractions, so its 2 columns */
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
  }
  @media (min-width: 768px) {
    /* below we use repeat function, which repeates 1fr 3 times */
    /* same as writing grid-template-columns: 1fr 1fr 1fr; */
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 992px) {
    .gatsby-image-wrapper {
      height: 100%;
    }
    grid-template-areas:
      "one one two two"
      "one one three three";
    .item-1 {
      grid-area: one;
    }
    .item-2 {
      grid-area: two;
    }
    .item-3 {
      grid-area: three;
    }
  }
`
