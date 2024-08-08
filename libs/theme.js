import { extendTheme, Heading, textDecoration } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f0e7db', '202023')(props)
    }
  })
}

const components = {
  Heading: {
    baseStyle: {
      letterSpacing: 'tighter'
    },
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#3d7aed')(props),
      textUnderlineOffset: 3,
      _hover: {
        textDecoration: 'none',
        color: mode('#3d7aed', '#3d7aed')(props)
      }
    }),
    color: '#3d7aed'
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const colors = {
  glassTeal: '#88ccca'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({
  styles,
  components,
  fonts,
  colors,
  config
})

export default theme
