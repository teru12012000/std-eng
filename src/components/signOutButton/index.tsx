'use client'

import { auth } from '@/lib/firebase/firebase'
import en from '@/shared/lang/en'
import { Button } from '@chakra-ui/react'
import { signOut } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import styles from './style.css'

const SignOutButton = () => {
    const router = useRouter()

    const signOutButtonIsClicked = () => {
        signOut(auth)
            .then((res) => router.push('/'))
            .catch((e) => {})
    }

    return (
        <div className={styles.buttonPosition}>
            <Button onClick={signOutButtonIsClicked}>
                {en.signOutButton.buttonTitle}
            </Button>
        </div>
    )
}

export default SignOutButton
