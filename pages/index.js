import Head from 'next/head'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Artes mafe</title>
        <meta name="description" content="Sitio oficial de Artes Mafe" />
        <link rel="icon" href="/artesmafe.ico" />
      </Head>

      <Navbar/>

    </div>
  )
}
