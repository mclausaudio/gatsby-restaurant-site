import React from "react"
import image from "../images/bcg/homeBcg.jpeg"
import styled from "styled-components"

export function HomeHeader({ image, children }) {
  return <IndexHeader image={image}>{children}</IndexHeader>
}

export function PageHeader({ image, children }) {
  return <DefaultHeader image={image}>{children}</DefaultHeader>
}

const IndexHeader = styled.header`
  min-height: calc(100vh - 50.78px);
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${props => props.image}) center/cover fixed no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`

//this component inherits all of the styles from the styled component passed in, other than the changed contained
const DefaultHeader = styled(IndexHeader)`
  min-height: 60vh;
`
//setting up default prop, in case image (or something else) is not passed in
HomeHeader.defaultProps = {
  image: image,
}
DefaultHeader.defaultProps = {
  image: image,
}
