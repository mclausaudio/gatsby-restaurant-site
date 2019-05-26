import React from "react"

import styled from "styled-components"

import { StaticQuery, graphql } from "gatsby"

import LocationCard from "./LocationCard"

const GET_LOCATIONS = graphql`
  {
    getLocations: allFile(filter: { relativeDirectory: { eq: "locations" } }) {
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

const Locations = () => {
  return (
    <LocationsWrapper>
      <StaticQuery
        query={GET_LOCATIONS}
        render={data => {
          let locations = data.getLocations.edges
          let locationInfo = [
            {
              address: "1234 9th Ave, SF",
              phone: "(415) 123-4567",
              hours: {
                Mon_Fri: "10am - 11pm",
                Sat_Sun: "9am - 1am",
              },
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid odit voluptate magni quas impedit rerum itaque, obcaecati libero facilis eaque laboriosam iste veniam nulla necessitatibus",
            },
            {
              address: "4321 12 St, SF",
              phone: "(415) 321-7654",
              hours: {
                Mon_Fri: "10am - 11pm",
                Sat_Sun: "9am - 1am",
              },
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid odit voluptate magni quas impedit rerum itaque, obcaecati libero facilis eaque laboriosam iste veniam nulla necessitatibus",
            },
          ]

          return locations.map(({ node }, index) => {
            return (
              <LocationCard
                fluid={node.childImageSharp.fluid}
                locationInfo={locationInfo[index]}
              />
            )
          })
        }}
      />
    </LocationsWrapper>
  )
}

const LocationsWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 2rem;
  max-width: 950px;
  margin: 2rem auto;
  @media (min-width: 776px) {
    /* below is fractions, so its 2 columns */
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
  }
`

export default Locations
