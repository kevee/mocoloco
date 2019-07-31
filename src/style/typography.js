import Typography from 'typography'
import './fonts'
import colors from './colors'

const backupFonts = [
  'Helvetica Neue',
  'Segoe UI',
  'Helvetica',
  'Arial',
  'sans-serif',
]

const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1.45,
  headerFontFamily: ['Public Sans black'].concat(backupFonts),
  bodyFontFamily: ['Public Sans'].concat(backupFonts),
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    a: {
      color: colors.link,
    },
    'a:visited': {
      color: colors.link,
    },
  }),
})

export default typography
