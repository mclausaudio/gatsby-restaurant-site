import React from "react"
import styled from "styled-components"

import { styles } from "../utils"

export default function Banner({ title, subtitle, children }) {
  return (
    <BannerWrapper>
      <h1 className="title">{title}</h1>
      <h3 className="subtitle">{subtitle}</h3>
      {children}
    </BannerWrapper>
  )
}

export function HomeBanner({ title, subtitle1, subtitle2, children }) {
  return (
    <BannerWrapper>
      <h1 className="title">{title}</h1>
      <h3 className="subtitle">{subtitle1.address}</h3>
      <h3 className="subtitle">{subtitle1.phone}</h3>
      {subtitle2 && (
        <div>
          <h3 className="subtitle">&</h3>
          <h3 className="subtitle">{subtitle2.address}</h3>
          <h3 className="subtitle">{subtitle2.phone}</h3>
        </div>
      )}
      {children}
    </BannerWrapper>
  )
}

const BannerWrapper = styled.div`
  margin-bottom: 3rem;
  text-align: center;

  .title {
    color: ${styles.colors.mainWhite};
    font-size: 3rem;
    text-transform: uppercase;
    ${styles.letterSpacing({ spacing: ".75rem" })}
  }
  .subtitle {
    color: ${styles.colors.mainWhite};
    ${styles.textSlanted};
    ${styles.letterSpacing({ spacing: "0.15rem" })};
    font-size: 1.5rem;
    text-transform: capitalize;
  }
`

Banner.defaultProps = {
  title: "Default Title",
}
