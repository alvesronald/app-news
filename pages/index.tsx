import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>App News</title>
        <meta name="description" content="App News - Good News" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <h1>News</h1>
     
    </div>
  )
}
