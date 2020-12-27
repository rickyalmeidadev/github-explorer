import styled from 'styled-components'
import {
  border,
  BorderProps,
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

import { cursor } from 'helpers/css'

interface Props extends BorderProps, FlexboxProps, LayoutProps, PositionProps, ShadowProps, SpaceProps {
  cursor?: string
}

const Card = styled.div<Props>`
  background-color: ${props => props.theme.colors.white};
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  padding: 16px;

  ${border}
  ${cursor}
  ${flexbox}
  ${layout}
  ${position}
  ${shadow}
  ${space}
`
export default Card
