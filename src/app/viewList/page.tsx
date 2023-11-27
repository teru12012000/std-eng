'use client'

import { auth } from '@/lib/firebase/firebase'
import useSWR from 'swr'
import { getData } from '@/util/getApi'
import styles from './style.css'
import SignOutButton from '@/components/signOutButton'
import { dataRecordType } from '@/shared/types/record'
import { Box, Card, CardBody, Heading, Text } from '@chakra-ui/react'
import { useAuthState } from 'react-firebase-hooks/auth'

const ViewList = () => {
    //const user = auth.currentUser
    const [user] = useAuthState(auth)
    const id = user?.uid
    const { data, isLoading } = useSWR(`/api/get/${id}`, getData)
    if (isLoading) return <div>wait</div>
    console.log(data)
    return (
        <div className={styles.containar}>
            <SignOutButton />

            <div className={styles.titleBox}>
                <h1>List</h1>
            </div>

            <div>
                {data?.map((item: dataRecordType) => (
                    <Card key={item.id}>
                        <CardBody>
                            <Box>
                                <Heading size="xs" textTransform="uppercase">
                                    English
                                </Heading>
                                <Text pt="2" fontSize="sm">
                                    {item.eng}
                                </Text>
                            </Box>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default ViewList
