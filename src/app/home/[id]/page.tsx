'use client'

import { auth } from '@/lib/firebase/firebase'
import { Alert, AlertIcon } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { useAuthState } from 'react-firebase-hooks/auth'
const MyHomePage = ({ params }: { params: { id: string } }) => {
    const router = useRouter()
    const [user] = useAuthState(auth)
    if (!user)
        return (
            <div>
                <Alert status="error">
                    <AlertIcon />
                    {'Please "login"'}
                </Alert>
            </div>
        )
    return <div>{user.uid}</div>
}

export default MyHomePage
