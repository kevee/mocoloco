import React from 'react'
import PageHeader from '../components/common/page-title'
import Layout from '../components/layouts/default'
import { Container } from '../components/common/container'

const MeetingListPage = ({ pageContext }) => {
  const { agency, agenda } = pageContext

  return (
    <Layout title={`${agency.name} meetings`}>
      <Container>
        <PageHeader>{agency.name} meetings</PageHeader>
      </Container>
    </Layout>
  )
}

export default MeetingListPage
