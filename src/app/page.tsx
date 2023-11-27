'use client'
import en from '@/shared/lang/en'
import { Alert, AlertIcon, Button } from '@chakra-ui/react'
import styles from './style.css'
import { useRouter } from 'next/navigation'
import firebase from 'firebase/compat/app'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '@/lib/firebase/firebase'

export default function Home() {
    const router = useRouter()
    const handleClickLogin = async () => {
        try {
            await signInWithPopup(auth, provider).then(() =>
                router.push('/home')
            )
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <main className={styles.container}>
            <div className={styles.titleBox}>
                <h1 className={styles.titleText}>{en.home.title}</h1>
                <p>{en.home.description}</p>
            </div>
            <div className={styles.alertBox}>
                <Alert status="warning">
                    <AlertIcon />
                    {en.home.WarningMessage}
                </Alert>
            </div>
            <div className={styles.buttonBox}>
                <Button onClick={handleClickLogin}>
                    {en.home.loginButton}
                </Button>
            </div>
        </main>
    )
}
