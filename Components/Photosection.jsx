import React from 'react'
import Image from 'next/image'
import styles from "../styles/Photo.module.css"
import { motion } from 'framer-motion'

const Photosection = () => {
    return (
        <motion.div className={styles.photo} initial="hidden" animate="visible" variants={{
            hidden: {
                scale: .8,
                opacity: 0
            },
            visible: {
                scale: 1,
                opacity: 1,
                transition: {
                    delay: .4
                }
            },
        }}>
            <Image height={350} width={350} src='/index16.jpg' alt='image' />

        </motion.div>
    )
}

export default Photosection