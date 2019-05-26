import React from "react"

import styled from "styled-components"

import Img from "gatsby-image"

import { SectionButton } from "../../utils"

const LocationCard = ({ locationInfo, fluid }) => {
  console.log(locationInfo)
  return (
    <LocationCardWrapper>
      <Img fluid={fluid} />
      <div className="text">
        <h3 className="address">{locationInfo.address}</h3>
        <h4 className="phone">{locationInfo.phone}</h4>
      </div>
      <SectionButton
        style={{ margin: "0 auto", width: "10=5rem", fontSize: "1rem" }}
      >
        Order Online
      </SectionButton>
    </LocationCardWrapper>
  )
}

const LocationCardWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  .text {
    margin: 1rem auto;
  }
  .text * {
    font-weight: 300;
    line-height: 1.3;
  }
`

export default LocationCard
