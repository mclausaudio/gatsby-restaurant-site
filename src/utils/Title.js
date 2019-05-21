import React from "react"
import { styles } from "../utils"
import styled from "styled-components"

export function Title({ title, subtitle }) {
  return (
    <TitleWrapper>
      {subtitle && <h3 className="subtitle">{subtitle}</h3>}
      <h1 className="title">{title}</h1>
      <div className="underline" />
    </TitleWrapper>
  )
}

Title.defaultProps = {
  // subtitle: "subtitle",
  title: "title",
}

const TitleWrapper = styled.div`
  text-align: center;

  .subtitle {
    ${styles.textSlanted};
    ${styles.letterSpacing({ spacing: "0.3rem" })};
    font-size: 2rem;
    color: ${styles.colors.mainYellow};
  }

  .title {
    ${styles.letterSpacing({ spacing: "0.3rem" })};
    font-size: 2rem;
    text-transform: uppercase;
  }

  .underline {
    width: 5rem;
    height: 0.2rem;
    background: ${styles.colors.mainYellow};
    margin: 0.5rem auto;
  }
`
