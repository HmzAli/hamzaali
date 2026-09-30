import Layout from '../../components/Layout'
import MainBanner from '../../components/MainBanner'
import './Index.scss'
import { PageMetadata } from '../../components/PageMetaData'
import Services from '../../components/Services'
import Selections from '../../components/Selections'
import Testimonials from '../../components/Testimonials'
import { Contact } from '../../components/Contact'

function Index() {
  return (
    <Layout>
      <PageMetadata
        title="Hamza Ali"
        description="Hamza Ali"
        canonical="https://isaacali.com"
      />

      <MainBanner />
      <Selections />
      <Testimonials />
    </Layout>
  )
}

export default Index
