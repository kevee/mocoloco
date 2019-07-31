import React from 'react'
import Layout from '../components/layouts/default'

const AgencyPage = ({ pageContext }) => {
  const { agency } = pageContext
  return (
    <Layout title="mocoloco">
      <h1>{agency.name}</h1>
    </Layout>
  )
}
export default AgencyPage
