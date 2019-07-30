import React from 'react'
import Header from './sections/header.js'
import '../../style/fonts'

const Layout = ({ title, noHeadingMargin, children }) => (
  <>
    <Header noHeadingMargin={noHeadingMargin} />
    <div>{children}</div>
  </>
)

export default Layout
