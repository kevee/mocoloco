import React from 'react'
import Header from './sections/header.js'
import '../../style/fonts'
import Footer from './sections/footer.js'
import Helmet from 'react-helmet'
import WindowSize from '@reach/window-size'
import WindowSizeContext from '../../contexts/window-size'

const Layout = ({ title, noHeadingMargin, children }) => (
  <>
    <Helmet
      defer={false}
      defaultTitle="mocoloco"
      titleTemplate={`%s | mocoloco`}
    >
      <html lang="en" />
      {title && <title>{title}</title>}
    </Helmet>
    <Header noHeadingMargin={noHeadingMargin} />
    <WindowSize>
      {size => (
        <WindowSizeContext.Provider
          value={{
            size: size,
            isMobile: size.width < 768,
          }}
        >
          <div>{children}</div>
        </WindowSizeContext.Provider>
      )}
    </WindowSize>
    <Footer />
  </>
)

export default Layout
