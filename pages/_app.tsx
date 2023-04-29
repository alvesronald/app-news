import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page)

 return getLayout(<Component {...pageProps} />)



  // recommended when the layout is the same for all pages

  // return (
  //   <Layout>
  //     <Component {...pageProps} />
  //   </Layout>
  // )
}

export default MyApp
