import React from 'react'
import Image from 'next/image'
import styles from "../styles/Intro.module.css"
import { Heading } from '@chakra-ui/react'
import { motion } from 'framer-motion'
const Introsection = (props) => {
    return (
        <motion.div className={styles.mainsec} initial="hidden" animate="visible" variants={{
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
            <motion.div className={styles.imgsection} initial="hidden" animate="visible" variants={{
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
                <Image height={250} width={250} src='/vashu.jpg' alt='brand' />
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={{
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
                <Heading textAlign='center' as='h1' size='xl'>
                    VASHU INDUSTRIAL WEAR
                </Heading>
                <Heading textAlign='center' as='h2' size='md'>
                    Forming Unity With an Identity
                </Heading>
            </motion.div>
            <motion.p className={styles.p} initial="hidden" animate="visible" variants={{
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
            }}>We have the Pleasure to introduce ourselves as one of the pioneer uniform makers in Mumbai. Culture is one of the most powerful influences regarding design and innovation in the ever changing apparel industry.</motion.p>
        </motion.div>
    )
}

export default Introsection