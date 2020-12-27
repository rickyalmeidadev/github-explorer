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

const Button = styled.button<Props>`
  background: ${props => props.theme.colors.primary};
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  font-weight: 700;
  font-size: 20px;
  padding: 24px;
  transition: background-color 200ms;

  :hover {
    background-color: ${props => props.theme.colors.primary$hover};
    border: 1px solid ${props => props.theme.colors.primary$hover};
  }

  :active {
    background-color: ${props => props.theme.colors.primary$active};
    border: 1px solid ${props => props.theme.colors.primary$active};
  }

  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${space}
`

export default Button
