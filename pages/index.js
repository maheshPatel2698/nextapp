import Head from 'next/head'

import Introsection from '../Components/Introsection'
import Photosection from '../Components/Photosection'
import styles from "../styles/Home.module.css"
import { Button } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div >
      <Head>
        <title>VASHU INDUSTRIAL WEAR</title>
        <meta name="description" content="We have the Pleasure to introduce ourselves as one of the pioneer uniform makers in Mumbai. Culture is one of the most powerful influences regarding design and innovation in the ever changing apparel industry. 
        We have the Pleasure to introduce ourselves as one of the pioneer uniform makers in Mumbai. Culture is one of the most powerful influences regarding design and innovation in the ever changing apparel industry.
        We make it a mission to keep customer satisfaction our number one priority. We strive to give you the best customer service & quality uniforms without sacrificing your convenience. We take personal responsibility for upholding high standards of customer service. It is a reflection of our company spirit.
        We are so confident that you will enjoy our comfortable but durable dress lines that we boldly back it, with our wide variety of style and colour choices, we can match your every need. And our size selections are like no other.... If we don't have it, we'll make it for you!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Introsection />
      <motion.div className={styles.homesec} initial="hidden" animate="visible" variants={{
        hidden: {
          scale: .8,
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: .6
          }
        },
      }}>
        <Photosection />
        <motion.div className={styles.imgsec} >
          <Image width={350} height={350} alt='images' src='/clients.jpg' />
          <Button m={2} variant='outline' color='black'>
            <Link href="/clients">Clients</Link>
          </Button>
        </motion.div>
        <motion.div className={styles.imgsec} initial="hidden" animate="visible" variants={{
          hidden: {
            scale: .8,
            opacity: 0
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: .6
            }
          },
        }}>
          <Image width={350} height={350} alt='images' src='/promo.jpg' />
          <Button m={2} variant='outline' color='black'>
            <Link href="/promotional">Promotional Ideas</Link>
          </Button>
        </motion.div>


      </motion.div>

    </div>
  )
}
