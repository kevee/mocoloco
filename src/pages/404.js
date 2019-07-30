import React from 'react'
import Layout from '../components/layouts/default'
import PageTitle from '../components/common/page-title'
import styled from '@emotion/styled'
import image from '../assets/images/404.gif'

const Image404 = styled.div`
  text-align: center;
`

const Page404 = () => (
  <Layout title="mocoloco">
    <PageTitle center={true}>Page not found</PageTitle>
    <Image404>
      <img src={image} aria-hidden />
    </Image404>
  </Layout>
)

export default Page404
