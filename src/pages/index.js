import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout, { siteTitle } from '../components/Layout'
import utilStyle from '../styles/utils.module.css'
import Link from 'next/link'
import { getPostsData } from '@/lib/post'

const inter = Inter({ subsets: ['latin'] })

//SSGの場合
export async function getStaticProps(){ //next.js固有の関数
  const allPostsData=getPostsData(); //id,title,data,thumbnail
  console.log(allPostsData);

  return { //allPostsDataをpropsとして返す(書き方はこういうもの)
    props:{
      allPostsData,
    },
  };
}

// //SSRの場合
// export async function getServerSideProps(context){
//   return {
//     props:{
//       //コンポーネントに渡すためのprops
//     },
//   }
// }

export default function Home({allPostsData}) {
  return (
   <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section>
      <p className={utilStyle.headingMd}>hello</p>
    </section>

    <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
      <h2>エンジニアのブログ</h2>
      <div className={styles.grid}>
        {allPostsData.map(({id,title,date,thumbnail})=>(
          <article key={id}>
            <Link href={`/posts/${id}`}>
              <img src={thumbnail} className={styles.thumbnailImage}/>
            </Link>
            <Link href={`/posts/${id}`}>
              <p className={utilStyle.boldText}>{title}</p>
            </Link>
            <br />
            <small className={utilStyle.lightText}>{date}</small>
          </article>

        ))}

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
