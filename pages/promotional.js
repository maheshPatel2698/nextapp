import React from 'react'
import styles from "../styles/promotion.module.css"
import { Heading } from "@chakra-ui/react"
import Image from 'next/image'
const promotional = () => {
    return (
        <div className={styles.main}>
            <Heading as="h1" size="xl" textAlign="center">
                Promotional Ideas
            </Heading>
            <p className={styles.p}>
                The way your people look affects the way your customers perceive you. Our complete career line helps ensure that you are developing positive feelings of confidence and trust. If it is a more casual, friendly look you want, check out our extensive casual career apparel line, a combination of confort and function.
            </p>
            <div className={styles.imgclass}>
                <Image className={styles.img} width={250} height={250} src='/promo.jpg' alt="image" />
                <Image className={styles.img} width={250} height={250} src='/clo.jpg' alt="image" />
                <Image className={styles.img} width={250} height={250} src='/pr-07.jpg' alt="image" />
                <Image className={styles.img} width={250} height={250} src='/promo.jpg' alt="image" />
                <Image className={styles.img} width={250} height={250} src='/clo.jpg' alt="image" />
                <Image className={styles.img} width={250} height={250} src='/pr-07.jpg' alt="image" />
                <Image className={styles.img} width={250} height={250} src='/promo.jpg' alt="image" />
                <Image className={styles.img} width={250} height={250} src='/clo.jpg' alt="image" />
                <Image className={styles.img} width={250} height={250} src='/pr-07.jpg' alt="image" />
            </div>
            <Heading as="h2" size="xl" textAlign="center">
                Embroidery Tags
            </Heading>
            <p className={styles.p}>
                Embroidery Tags : We Offer Lettering as well as logo designs. One of the most prominent identity items of any business is the logo. A logo is a sign or brand designed for simple and explicit identification by the mass. Your logo is your signature and idea of your business that you want to be memorized. We believe a clients logo on our products is like placing his trust on us.
            </p>
            <div className={styles.imgclass}>
                <Image className={styles.img} width={250} height={250} src='/promo.jpg' alt="image" />
                <Image className={styles.img} width={250} height={250} src='/clo.jpg' alt="image" />
                <Image className={styles.img} width={250} height={250} src='/pr-07.jpg' alt="image" />
                <Image className={styles.img} width={250} height={250} src='/promo.jpg' alt="image" />
                <Image className={styles.img} width={250} height={250} src='/clo.jpg' alt="image" />
                <Image className={styles.img} width={250} height={250} src='/pr-07.jpg' alt="image" />
            </div>
            <p className={styles.p}>
                We offer a wide range of promotional products, in equally variegating options of design, colour sizes etc. you will definitely find what you need among our formal shirts, banded shirts, tuxedo shirts, bow ties, neck ties, designer vests, tuxedo vests, tuxedo pants, and sports blazers.
            </p>
            <div className={styles.imgclass}>
                <Image className={styles.img} width={250} height={250} src='/promo.jpg' alt="image" />
                <Image className={styles.img} width={250} height={250} src='/clo.jpg' alt="image" />
                <Image className={styles.img} width={250} height={250} src='/pr-07.jpg' alt="image" />
                <Image className={styles.img} width={250} height={250} src='/promo.jpg' alt="image" />
                <Image className={styles.img} width={250} height={250} src='/clo.jpg' alt="image" />
                <Image className={styles.img} width={250} height={250} src='/pr-07.jpg' alt="image" />
            </div>
        </div>
    )
}

export default promotional