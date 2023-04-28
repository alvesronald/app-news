import { Layout } from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page)

 return getLayout(<Component {...pageProps} />)



  // A abordagem abaixo é recomendada quando nosso layout é igual para todas as telas.

  // return (
  //   <Layout>
  //     <Component {...pageProps} />
  //   </Layout>
  // )
}

export default MyApp
