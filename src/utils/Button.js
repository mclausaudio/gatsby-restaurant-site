import styled from "styled-components"
import { styles } from "../utils"

// These are the default styles I would like to use for the buttons.  If I want to change a few things for a specfici context (for example position), I can do that directly onto the component as a prop, as in use in-line styling on the <Component />
const BannerButton = styled.button`
  display: block;
  color: ${styles.colors.mainWhite};
  background: transparent;
  padding: 0.5rem 1rem;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.5rem;
  letter-spacing: 0.3rem;
  font-weight: 700;
  ${styles.border({ color: `${styles.colors.mainWhite}` })};
  margin-bottom: 1rem;
  ${styles.transition({})};

  &:hover {
    background: ${styles.colors.mainWhite};
    color: ${styles.colors.mainBlack};
    cursor: pointer;
  }
`

const SectionButton = styled(BannerButton)`
  color: ${styles.colors.mainBlack};
  ${styles.border({ color: `${styles.colors.mainBlack}` })};

  &:hover {
    background: ${styles.colors.mainBlack};
    color: ${styles.colors.mainYellow};
  }
`

const MenuButton = styled(SectionButton)`
  font-size: 1.1rem;
  letter-spacing: 0.2rem;
`

export { BannerButton, SectionButton, MenuButton }
