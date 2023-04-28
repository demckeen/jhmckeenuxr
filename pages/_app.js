import Layout from '../components/layout'
import '../styles/style.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout> )
}

export default MyApp