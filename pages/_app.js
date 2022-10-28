import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import { motion } from 'framer-motion'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import "../styles/styles.css"
function MyApp({ Component, pageProps, router }) {
  return (
    <div className='body'>
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
