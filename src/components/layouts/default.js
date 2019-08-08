import React from 'react'
import Header from './sections/header.js'
import '../../style/fonts'
import Footer from './sections/footer.js'
import Helmet from 'react-helmet'

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
    <div>{children}</div>
    <Footer />
  </>
)

export default Layout
