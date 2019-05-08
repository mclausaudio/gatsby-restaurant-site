import React, { Component } from "react"
import { Section, Title, SectionButton } from "../../utils"
import styled from "styled-components"
import { styles } from "../../utils"
import { Link } from "gatsby"

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title subtitle="let us tell you" title="our mission" />
        <QuickInfoWrapper>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
            qui dicta accusamus itaque! Accusantium dicta, aliquid doloribus
            eaque veritatis eius itaque voluptatibus impedit provident optio
            vitae qui perspiciatis necessitatibus rem odio quae velit quod at
            tempora aspernatur recusandae, assumenda fugit? Nemo iusto, deleniti
            natus voluptas nisi sed omnis qui minus voluptatem beatae eos!
            Dignissimos sint similique repudiandae consequatur commodi incidunt.
          </p>
          <Link to="/about" style={{ textDecoration: "none" }}>
            {/* We define the generic / default styles in the SectionButton, but do all the 'positioning' styles inline like below */}
            <SectionButton style={{ margin: "2rem auto" }}>about</SectionButton>
          </Link>
        </QuickInfoWrapper>
      </Section>
    )
  }
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;

  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 968px) {
    width: 60%;
  }
`
