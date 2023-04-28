import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Layout } from '../components/Layout'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>App News</title>
        <meta name="description" content="App News - Good News" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>News</h1>
      <h1>News</h1>
      <h1>News</h1>
      <h1>News</h1>
      <h1>News</h1>
      <h1>News</h1>
      <h1>News</h1>
      <h1>News</h1>
      <h1>News</h1>
      <h1>News</h1>
      <h1>News</h1>
      <h1>News</h1>
      <h1>News</h1>
      <h1>News</h1>
      <h1>News</h1>
      <h1>News</h1>
      <h1>News</h1>
      <h1>News</h1>
      <h1>News</h1>
      <h1>News</h1>
      <h1>News</h1>
      <h1>News</h1>
      <h1>News</h1>
      <h1>News</h1>
      <h1>News</h1>
      <h1>News</h1>
      <h1>News</h1>
      <h1>News</h1>
      <h1>News</h1>
      <h1>News</h1>
      <h1>News</h1>
      <h1>News</h1>
      <h1>News</h1>
      <h1>News</h1>
      <h1>News</h1>
      <h1>News</h1>
      <h1>News</h1>
      <h1>News</h1>
      <h1>News</h1>
      <h1>News</h1>
   
     
    </div>
  )
}

Home.getLayout = function getLayout(page){
  return <Layout title='News'>{page}</Layout>
}