import React from 'react'
import Layout from '../components/layouts/default'
import PageTitle from '../components/common/page-title'
import styled from '@emotion/styled'
import image from '../assets/images/condor-head.png'
import { Container } from '../components/common/container'

const Image404 = styled.div`
  text-align: center;
  img {
    width: 300px;
  }
`

const Page404 = () => (
  <Layout title="Page not found">
    <Container>
      <PageTitle>Page not found</PageTitle>
      <Image404>
        <img src={image} alt="A condor thinking hard" />
      </Image404>
    </Container>
  </Layout>
)

export default Page404
