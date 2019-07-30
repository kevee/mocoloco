import React from 'react'
import Header from './sections/header.js'
import '../../style/fonts'

const Layout = ({ title, children }) => (
  <>
    <Header />
    <div>{children}</div>
  </>
)

export default Layout
