import React from 'react'
import styles from "../styles/promotion.module.css"
import { Heading } from "@chakra-ui/react"
import Image from 'next/image'
const product = () => {
    return (
        <div className={styles.main}>
            <Heading as="h1" size="xl" textAlign="center">
                Products
            </Heading>
            <Heading as="h2" size="xl" textAlign="center">
                Industries
            </Heading>
            <p className={styles.p}>
                Tough conditions require hard-working apparel for hard-working people. When you work hard every day, you need clothes that work even harder. Our complete line of industrial apparel and professional work clothes include everything in assorted styles and colours from pants to shorts and shirts to jackets. We also offer a wide selection of high visibility apparel and flame resistant work clothes.
            </p>
            <div className={styles.imgclass}>
                <Image className={styles.img} width={250} height={250} src='/promo.jpg' alt="images" />
                <Image className={styles.img} width={250} height={250} src='/clo.jpg' alt="images" />
                <Image className={styles.img} width={250} height={250} src='/pr-07.jpg' alt="images" />
                <Image className={styles.img} width={250} height={250} src='/promo.jpg' alt="images" />

            </div>
            <Heading as="h2" size="xl" textAlign="center">
                Hospitals
            </Heading>
            <p className={styles.p}>
                We are specialised in employee identification and helthcare apparel, including gowns and other protective wear. We are offering unique medical and nursing uniforms and scrubs for men and women that are trendy and casual. We offer a variety of scrub sets in many different colours and pants feature drawstring or elastic waist. We also offer embroidery for scrub tops and lab coats.
            </p>
            <div className={styles.imgclass}>
                <Image className={styles.img} width={250} height={250} src='/promo.jpg' alt="images" />
                <Image className={styles.img} width={250} height={250} src='/clo.jpg' alt="images" />
                <Image className={styles.img} width={250} height={250} src='/pr-07.jpg' alt="images" />
                <Image className={styles.img} width={250} height={250} src='/promo.jpg' alt="images" />
                <Image className={styles.img} width={250} height={250} src='/clo.jpg' alt="images" />
                <Image className={styles.img} width={250} height={250} src='/pr-07.jpg' alt="images" />
            </div>
            <Heading as="h2" size="xl" textAlign="center">
                Hotal & Hospitality Industries
            </Heading>
            <p className={styles.p}>
                Chef uniform design, tailored shirts, aprons, pants and hats from us surpass other chef uniform Companies.We have the best selection for the chef uniforms. We carry many styles of chef wear and every other chef uniform related accessory you could need.
            </p>
            <div className={styles.imgclass}>
                <Image className={styles.img} width={250} height={250} src='/promo.jpg' alt="images" />
                <Image className={styles.img} width={250} height={250} src='/clo.jpg' alt="images" />
                <Image className={styles.img} width={250} height={250} src='/pr-07.jpg' alt="images" />
                <Image className={styles.img} width={250} height={250} src='/promo.jpg' alt="images" />
                <Image className={styles.img} width={250} height={250} src='/clo.jpg' alt="images" />

            </div>
            <Heading as="h2" size="xl" textAlign="center">
                Safety & Security
            </Heading>
            <p className={styles.p}>
                Our line of security uniforms offers complete security uniform apparel for both men and women. With a focus on security guard uniforms that meet all of our customer needs, we offer form-fitting shirts and high quality trousers to professionally dress your security staff. Our security line includes security blazers, security shirts and security pants as well as accessories like belts caps and ties.
            </p>
            <div className={styles.imgclass}>
                <Image className={styles.img} width={250} height={250} src='/promo.jpg' alt="Images" />
                <Image className={styles.img} width={250} height={250} src='/clo.jpg' alt="Images" />
                <Image className={styles.img} width={250} height={250} src='/pr-07.jpg' alt="Images" />
                <Image className={styles.img} width={250} height={250} src='/promo.jpg' alt="Images" />
                <Image className={styles.img} width={250} height={250} src='/clo.jpg' alt="Images" />

            </div>
        </div>
    )
}

export default product