import React from 'react'
import styles from '../styles/Footer.module.css'
import { Heading } from "@chakra-ui/react"
const Footer = () => {
    return (
        <div className={styles.footer}>
            <Heading className={styles.heading} as='h2' size="mx">
                VASHU INDUSTRIAL WEAR
            </Heading>
            <p className={styles.subheading} >
                We have the Pleasure to introduce ourselves as one of the pioneer uniform makers in Mumbai. Culture is one of the most powerful influences regarding design and innovation in the ever changing apparel industry.
            </p>


        </div>
    )
}

export default Footer