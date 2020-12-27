import styled from 'styled-components'
import {
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  typography,
  TypographyProps
} from 'styled-system'

interface Props extends ColorProps, FlexboxProps, PositionProps, SpaceProps, TypographyProps {}

const Typography = styled.p<Props>`
  ${color}
  ${flexbox}
  ${position}
  ${space}
  ${typography}
`

export default Typography
