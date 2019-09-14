import React from 'react'
import PageHeader from '../components/common/page-title'
import Layout from '../components/layouts/default'
import { Container } from '../components/common/container'
import { AgendaList } from '../components/common/agenda-list'

const MeetingListPage = ({ pageContext }) => {
  const { agency, agendas } = pageContext

  return (
    <Layout title={`${agency.name} meetings`}>
      <Container>
        <PageHeader>{agency.name} meetings</PageHeader>
        <AgendaList agendas={agendas} agency={agency} />
      </Container>
    </Layout>
  )
}

export default MeetingListPage
