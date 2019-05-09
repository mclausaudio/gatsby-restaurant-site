// THIS IS AN EXAMPLE COMPONENT TO SHOW ONE WAY TO DO AN IMAGE GRID
// the main difference here from the main gallery photo is the way we query things
// I decided to keep this in as a reference, to show one way of doing things

import React from "react"

import styled from "styled-components"
import { styles, Section } from "../../utils"

import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// const SINGLE_IMAGE = graphql`
//   {
//     img1: file(relativePath: { eq: "homeGallery/img-1.jpeg" }) {
//       childImageSharp {
//         fluid(maxWidth: 500) {
//           ...GatsbyImageSharpFluid_tracedSVG
//         }
//       }
//     }
//   }
// `

//Below is just an example, this would work too.. to query multiple images
//but if you wanan do a bunch of images this wouldn't really be the most effective
const MULTI_IMAGE = graphql`
  {
    img1: file(relativePath: { eq: "homeGallery/img-1.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    img2: file(relativePath: { eq: "homeGallery/img-2.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    img3: file(relativePath: { eq: "homeGallery/img-3.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default function Gallery() {
  return (
    <StaticQuery
      query={MULTI_IMAGE}
      render={data => {
        const img1 = data.img1.childImageSharp.fluid
        const img2 = data.img2.childImageSharp.fluid
        const img3 = data.img3.childImageSharp.fluid
        return (
          <Section>
            <GalleryWrapper>
              <div className="item item-1">
                <Img fluid={img1} />
                <p className="info">Delicious pizza</p>
              </div>
              <div className="item item-2">
                <Img fluid={img2} />
                <p className="info">Tasty Pork</p>
              </div>
              <div className="item item-3">
                <Img fluid={img3} />
                <p className="info">Beautiful Steak</p>
              </div>
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
