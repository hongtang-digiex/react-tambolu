import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Home.module.css'
import Layout from '/components/Layout/Layout'
import ProductDetail from '/components/Product_detail/Main'
import Footer from '/components/Footer/IntroduceInfo.js'
import {useRouter} from 'next/router'
import config from '/public/config.json';
import {getQueryById, getCommentById} from '/public/store/ProductState'
import {useState, useEffect} from 'react'
import CommentBlock from '/components/Product_detail/CommentBlock'


export default function Home() {

  const router = useRouter()
    const { pd_id } = router.query
    
    const [product, setProduct] = useState({
        rating_point: [0],
        title: pd_id,
        imgSrc: "https://dominionmartialarts.com/wp-content/uploads/2017/04/default-image.jpg"
    });
    const [commentBlock, setCommentBlock] = useState([])

    useEffect(() => {
      getQueryById(pd_id*1).then((res) => {
        setProduct(res);
        getCommentById(res?.comment_id).then((data) => {
          setCommentBlock(data)
        })
      })        
      
    },[pd_id]);
  
  return (
    
    <div className={styles.container}>
      <Head>
        <title>{"Sản phẩm tambolu"}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet"/>
      </Head>

      <main className={styles.main}>
       
        <Layout/>

        <ProductDetail product={product} comment_block={commentBlock}/>
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
