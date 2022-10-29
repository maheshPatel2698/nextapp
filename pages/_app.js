import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import { motion } from 'framer-motion'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import "../styles/styles.css"
import Head from 'next/head'
import router from "next/router"
function MyApp({ Component, pageProps, router }) {
  console.log(router.pathname)
  return (
    <div className='body'>
      <Head>
        <title>`VASHU INDUSTRIAL WEAR{router.pathname}</title>
        <meta name="description" content="We have the Pleasure to introduce ourselves as one of the pioneer uniform makers in Mumbai. Culture is one of the most powerful influences regarding design and innovation in the ever changing apparel industry. 
        We have the Pleasure to introduce ourselves as one of the pioneer uniform makers in Mumbai. Culture is one of the most powerful influences regarding design and innovation in the ever changing apparel industry.
        We make it a mission to keep customer satisfaction our number one priority. We strive to give you the best customer service & quality uniforms without sacrificing your convenience. We take personal responsibility for upholding high standards of customer service. It is a reflection of our company spirit.
        We are so confident that you will enjoy our comfortable but durable dress lines that we boldly back it, with our wide variety of style and colour choices, we can match your every need. And our size selections are like no other.... If we don't have it, we'll make it for you!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider>
        <Navbar />
        <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
          pageInitial: {
            opacity: 0
          },
          pageAnimate: {
            opacity: 1
          },
          pageExit: {
            backgroundColor: 'white',
            filter: `invert()`,
            opacity: 0
          }
        }}>

          <Component {...pageProps} />
        </motion.div>
        <Footer />
      </ChakraProvider>
    </div >
  )
}

export default MyApp
