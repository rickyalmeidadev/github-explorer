import { css, FlattenSimpleInterpolation } from 'styled-components'

export const center = (props: { center?: boolean }): FlattenSimpleInterpolation | undefined => {
  if (props.center) {
    return css`
      justify-content: center;
      align-items: center;
    `
  }
}

export const cursor = (props: { cursor?: string }): FlattenSimpleInterpolation | undefined => {
  if (props.cursor) {
    return css`
      cursor: ${props.cursor};
    `
  }
}
