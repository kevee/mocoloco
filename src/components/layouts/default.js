import React from 'react'
import Header from './sections/header.js'
import '../../style/fonts'
import Footer from './sections/footer.js'

const Layout = ({ title, noHeadingMargin, children }) => (
  <>
    <Header noHeadingMargin={noHeadingMargin} />
    <div>{children}</div>
    <Footer />
  </>
)

export default Layout
