import palette from './palette'

const theme = {
  breakpoints: ['600px', '960px'],
  colors: {
    ...palette,
    primary: palette.blue['400'],
    primary$hover: palette.blue['600'],
    primary$active: palette.blue['800'],
    secondary: palette.cyan['400'],
    secondary$hover: palette.cyan['600'],
    secondary$active: palette.cyan['800'],
    success: palette.green['400'],
    error: palette.red['400'],
    warning: palette.amber['400'],
    info: palette.blue['400'],
    disabled: palette.gray['500']
  },
  space: [0, 8, 16, 24, 32, 40, 64]
}

export default theme
