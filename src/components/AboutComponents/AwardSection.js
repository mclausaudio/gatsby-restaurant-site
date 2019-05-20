import React from "react"

import styled from "styled-components"
import { styles } from "../../utils"

import { FaAward } from "react-icons/fa"

export default function AwardSection() {
  return (
    <AwardWrapper>
      <div className="award">
        <FaAward className="icon" />
        <p>Best restauarant in the inner sunset</p>
        <p>2018</p>
      </div>
      <div className="award">
        <FaAward className="icon" />
        <p>Featured in restaurant magazine</p>
        <p>2018</p>
      </div>
      <div className="award">
        <FaAward className="icon" />
        <p>Eaters choice award</p>
        <p>2017</p>
      </div>
    </AwardWrapper>
  )
}

const AwardWrapper = styled.div`
  margin: 2rem auto 0 auto;
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 1rem;
  width: 70%;
  color: ${styles.colors.mainGrey};
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  .award {
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    width: 10rem;
  }
  .icon {
    font-size: 5rem;
  }
`
