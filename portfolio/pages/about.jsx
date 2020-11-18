import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
        <Navbar />
        
        <div className={styles.container}>
            <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
            <h1 className={styles.title}>
                Welcome to <a href="https://rilmubarak.com" target='_blank'>Baril</a>
            </h1>

            <p className={styles.description}>
                Everything is Connected
            </p>
            </main>

            <footer className={styles.footer}>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{' '}
                <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
            </a>
            </footer>
        </div>
    </>
  )
}
