import styled from 'styled-components'
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps
} from 'styled-system'

import { center } from 'helpers/css'

interface Props
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps {
  center?: boolean
}

const Column = styled.div<Props>`
  display: flex;
  flex-direction: column;
  ${background}
  ${border}
  ${center}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${shadow}
  ${space}
`

export default Column
