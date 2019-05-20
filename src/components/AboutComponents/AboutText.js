import React from "react"

import { styles, Section, SectionButton } from "../../utils"

import styled from "styled-components"

export default function AboutText() {
  return (
    <AboutTextWrapper>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
        provident nostrum unde amet autem sapiente quisquam facilis hic,
        accusamus pariatur labore ratione aliquid vero ipsum. Aut eum
        reprehenderit delectus aspernatur cum nemo libero, autem, voluptatem
        atque error molestiae, voluptates dicta sequi! Vero veritatis nobis eum
        quae sapiente aliquid facilis, fugiat ea! Similique nihil officiis
        nobis, ex itaque beatae nesciunt rem quasi cumque iusto dolorem vero
        dolor maxime sint aut cum repellendus corrupti quam quibusdam. Vel est
        numquam veritatis explicabo beatae cumque, eveniet accusamus optio
        impedit sed quibusdam vitae odio quam quo corporis cum, odit voluptates
        soluta harum necessitatibus non perferendis! Provident magnam aut sequi
        incidunt, ut eius excepturi repellat culpa architecto inventore dolore
        earum tempore deleniti? Accusantium saepe tempore officiis tenetur error
        sit reiciendis nostrum! Nobis nihil ipsam consequuntur placeat odio
        quibusdam eius, eum numquam obcaecati modi! Aspernatur, odit ex neque
        dicta fuga placeat nulla sed nisi pariatur enim inventore.
      </p>
    </AboutTextWrapper>
  )
}

const AboutTextWrapper = styled.div`
  width: 90%;
  font-size: 1.1rem;
  font-weight: 300;
  margin: 2rem auto;
  line-height: 1.9;
  color: ${styles.colors.mainGrey};
  @media (min-width: 768px) {
    width: 75%;
  }
`
