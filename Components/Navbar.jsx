import React from 'react'
import styles from "../styles/Navbar.module.css"
import Link from 'next/link'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    IconButton
} from '@chakra-ui/react'
import { HamburgerIcon } from "@chakra-ui/icons"
const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
        <>

            <div className={styles.main}>

                <div className={styles.left}>
                    <div className={styles.drawer}>
                        <IconButton
                            onClick={onOpen}
                            colorScheme='blue'
                            size='lg'
                            icon={<HamburgerIcon />}
                        />
                        <Drawer
                            isOpen={isOpen}
                            placement='right'
                            onClose={onClose}
                            finalFocusRef={btnRef}
                        >
                            <DrawerOverlay />
                            <DrawerContent>
                                <DrawerCloseButton />
                                <DrawerHeader>Navigate</DrawerHeader>
                                <DrawerBody>
                                    <div className={styles.hidden}>
                                        <span><Link href="/">Home</Link></span>
                                        <span><Link href="/product">Product</Link></span>
                                        <span><Link href="/contactus">Contact Us</Link></span>
                                        <span><Link href="/promotional">Promotional</Link></span>
                                        <span><Link href="/stockist">Stockist</Link></span>
                                        <span><Link href="/clients">Our Clients</Link></span>
                                    </div>
                                </DrawerBody>
                            </DrawerContent>
                        </Drawer>

                    </div>
                </div>
                <div className={styles.sec}>
                    <Link href='/'>Home</Link>

                    <Link href="/product">Product</Link>
                    <Link href="/contactus">Contact Us</Link>
                    <Link href="/promotional">Promotional</Link>
                    <Link href="/stockist">Stockist</Link>
                    <Link href="/clients">Our Clients</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar