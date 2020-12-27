import styled from 'styled-components'
import { layout, LayoutProps, position, PositionProps, shadow, ShadowProps, space, SpaceProps } from 'styled-system'

interface Props extends LayoutProps, PositionProps, ShadowProps, SpaceProps {
  center?: boolean
}
const Avatar = styled.img<Props>`
  border-radius: 50%;
  box-shadow: 0px 0px 20px rgba(113, 89, 193, 0.2);
  height: 80px;
  object-fit: cover;
  width: 80px;

  ${layout}
  ${position}
  ${shadow}
  ${space}
`

export default Avatar
