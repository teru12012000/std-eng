'use client'

import SignOutButton from '@/components/signOutButton'
import { auth } from '@/lib/firebase/firebase'
import { Alert, AlertIcon, Button } from '@chakra-ui/react'
import { useAuthState } from 'react-firebase-hooks/auth'
import styles from './style.css'
import en from '@/shared/lang/en'
import { menuLink } from '@/shared/data/link'
import { menu } from '@/shared/types/link'
import Link from 'next/link'
const MyHomePage = () => {
    const [user] = useAuthState(auth)
    if (!user) {
        return (
            <div className={styles.containar}>
                <Alert status="error">
                    <AlertIcon />
                    {'Please "login"'}
                </Alert>
            </div>
        )
    }
    return (
        <div className={styles.containar}>
            <div>
                <SignOutButton />
            </div>
            <div className={styles.titleBox}>
                <h1>{`${en.myHome.title}${user.displayName}`}</h1>
            </div>
            <div>
                <Alert status="info">
                    <AlertIcon />
                    {en.myHome.info}
                </Alert>
            </div>

            <div className={styles.menuBox}>
                <h2 className={styles.subTitle}>{en.myHome.menuTitle}</h2>
                <div>
                    {menuLink.map((item: menu, index: number) => (
                        <div key={index} className={styles.menuList}>
                            <Link href={item.link}>
                                <Button>{item.title}</Button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MyHomePage
