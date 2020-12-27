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
  space,
  SpaceProps
} from 'styled-system'

interface Props extends BorderProps, ColorProps, FlexboxProps, LayoutProps, PositionProps, SpaceProps {}

const TextField = styled.input<Props>`
  background: ${props => props.theme.colors.white};
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.gray[800]};
  font-size: 20px;
  padding: 24px;
  width: auto;

  ::placeholder {
    color: ${props => props.theme.colors.gray[400]};
  }

  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${space}
`

export default TextField
