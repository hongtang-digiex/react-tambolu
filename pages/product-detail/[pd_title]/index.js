import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Home.module.css'
import Layout from '/components/Layout/Layout'
import ProductDetail from '/components/Product_detail/Main'
import Footer from '/components/Footer/IntroduceInfo.js'
import {useRouter} from 'next/router'
import config from '/public/config.json';
import {getQueryByTitle, getCommentById} from '/public/store/ProductState'
import {useState, useEffect} from 'react'
import CommentBlock from '/components/Product_detail/CommentBlock'

const PATH     = config.NEO4J_DB_CONFIG.PATH;
const USERNAME = config.NEO4J_DB_CONFIG.USERNAME;
const PASSWORD = config.NEO4J_DB_CONFIG.PASSWORD;

export default function Home() {

  const router = useRouter()
    const { pd_title } = router.query
    
    const [product, setProduct] = useState({
        rating_point: [0],
        title: pd_title,
        imgSrc: "https://dominionmartialarts.com/wp-content/uploads/2017/04/default-image.jpg"
    });
    const [commentBlock, setCommentBlock] = useState([])

    useEffect(() => {
      getQueryByTitle(pd_title).then((res) => {
        setProduct(res);
      })        
      getCommentById(product?.comment_id).then((data) => {
        console.log(data)
        setCommentBlock(data)
      })
      
    },[pd_title, product?.comment]);
  
  return (
    
    <div className={styles.container}>
      <Head>
        <title>{"Sản phẩm tambolu"}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       
        <Layout/>

        <ProductDetail product={product}/>
        <CommentBlock comment_block={commentBlock}/>

        <Footer/>
        
      </main>

      <footer className={styles.footer}>
        <a
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
