import React from 'react'
import { Heading, Image, Button } from '@chakra-ui/react'
import { motion } from "framer-motion"
import styles from "../styles/clients.module.css"

const stockist = () => {
    const client = [
        {
            name: "M/s. ABB Lenzohm Ltd.",
            src: '/abb.jpg'
        },
        {
            name: "M/s. B.R.T. Ltd.",
            src: '/brt.jpg'
        },
        {
            name: "M/s. Bharat Gears Ltd.",
            src: '/bhartgears.jpg'
        },
        {
            name: "M/s. C.P. Tools Ltd.",
            src: '/cp.jpg'
        },
        {
            name: "M/s. Godrej & Boyce Mfg. Co. Ltd.",
            src: '/god.jpg'
        },
        {
            name: "M/s. Godrej & Boyce Mfg. Co. Ltd.",
            src: '/godap.jpg'
        },
        {
            name: "M/s. Godrej - GE - Appliances Ltd.",
            src: '/godap.jpg'
        },
        {
            name: "M/s. Hafficine Bio - Pharma Ltd.",
            src: '/haffici.jpg'
        },
        {
            name: "M/s. Hindustan Petroleum Corporation Ltd.",
            src: '/hp.png'
        },
        {
            name: "M/s. India Govt. of Mint.",
            src: '/govmint.jpg'
        },
        {
            name: "M/s. Jaysynth Dyechem Ltd.",
            src: '/jaysynth.jpg'
        },
        {
            name: "M/s. Monginis Foods Ltd.",
            src: '/mongonis.png'
        },
        {
            name: "M/s. MahindMahindra Ltd.",
            src: '/mm.jpg'
        },
        {
            name: "M/s. Philips India Ltd.",
            src: '/phillips.jpg'
        },
        {
            name: "M/s. Star Industries Ltd.",
            src: '/si.png'
        },
        {
            name: "M/s. Tata Pharma Ltd.",
            src: '/tatafarma.jpg'
        },
        {
            name: "M/s. Videocon Ltd.",
            src: '/videocon.jpg'
        },
        {
            name: "M/s. W.M.I Cranes Ltd.",
            src: '/wmi.jpg'
        }
    ]
    return (
        <>
            <Heading textAlign='center' as='h1' size='xl'>
                Stockist At
            </Heading>
            <motion.div className={styles.clientsec} initial="hidden" animate="visible" variants={{
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

                {client.map((c, index) => {
                    return (
                        <div key={index} className={styles.card}>
                            <div className={styles.imgcard}>
                                <Image className={styles.img} src={c?.src} />
                            </div>
                            <div className={styles.btn}>
                                <Button variant='solid'>{c?.name}</Button>
                            </div>
                        </div>
                    )
                })}

            </motion.div>
        </>
    )
}

export default stockist