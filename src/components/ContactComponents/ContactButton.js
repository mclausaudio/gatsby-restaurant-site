import React from "react"

import styled from "styled-components"

import { SectionButton } from "../../utils"

export default function ContactButton() {
  return (
    <ButtonWrapper>
      <a
        style={{ textDecoration: "none" }}
        href="https://www.yelp.com"
        target="_blank"
      >
        <SectionButton style={{ margin: "0 auto" }}>Order Online</SectionButton>
      </a>
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.div`
  margin: 0 auto 1rem auto;
`
