import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '../components/Layout'
import utilStyle from '../styles/utils.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <Layout>
    <section>
      <p className={utilStyle.headingMd}>こんにちは</p>
    </section>

    <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
      <h2>エンジニアのブログ</h2>
      <div className={styles.grid}>
        <article>
          <Link href="/">
            <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage}/>
          </Link>
          <Link href="/">
            <p className={utilStyle.boldText}>タイトル</p>
          </Link>
          <br />
          <small className={utilStyle.lightText}>February 23, 2023</small>
        </article>
        <article>
          <Link href="/">
            <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage}/>
          </Link>
          <Link href="/">
            <p className={utilStyle.boldText}>タイトル</p>
          </Link>
          <br />
          <small className={utilStyle.lightText}>February 23, 2023</small>
        </article>
        <article>
          <Link href="/">
            <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage}/>
          </Link>
          <Link href="/">
            <p className={utilStyle.boldText}>タイトル</p>
          </Link>
          <br />
          <small className={utilStyle.lightText}>February 23, 2023</small>
        </article>
        <article>
          <Link href="/">
            <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage}/>
          </Link>
          <Link href="/">
            <p className={utilStyle.boldText}>タイトル</p>
          </Link>
          <br />
          <small className={utilStyle.lightText}>February 23, 2023</small>
        </article>
      </div>
    </section>
   </Layout>
  )
}
