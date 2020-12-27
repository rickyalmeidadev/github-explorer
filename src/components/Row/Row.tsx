import styled from 'styled-components'
import {
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

interface Props extends BorderProps, ColorProps, FlexboxProps, LayoutProps, PositionProps, ShadowProps, SpaceProps {
  center?: boolean
}

const Row = styled.div<Props>`
  display: flex;
  ${border}
  ${center}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${shadow}
  ${space}
`

export default Row
