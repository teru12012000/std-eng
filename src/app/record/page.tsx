'use client'

import { validationRecordType } from '@/shared/types/record'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { recordValidation } from '@/util/validation'
import SignOutButton from '@/components/signOutButton'
import styles from './style.css'
import en from '@/shared/lang/en'
import {
    Alert,
    AlertIcon,
    Textarea,
    Text,
    RadioGroup,
    Stack,
    Radio,
    Button,
    FormControl,
    FormLabel,
} from '@chakra-ui/react'
import { recordRadio } from '@/shared/data/radio'
import { recordRadioType } from '@/shared/types/radio'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '@/lib/firebase/firebase'
import {
    addDoc,
    collection,
    doc,
    getFirestore,
    setDoc,
} from 'firebase/firestore'
import { useRouter } from 'next/navigation'

const Record = () => {
    const router = useRouter()
    const [user] = useAuthState(auth)
    const [kind, setKind] = useState<string>('word')

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<validationRecordType>({
        resolver: yupResolver(recordValidation),
    })

    const onSubmit = async (data: validationRecordType) => {
        const postData = collection(db, user?.uid as string)
        console.log(data)
        try {
            console.log('start')
            await addDoc(postData, {
                eng: data.eng,
                ja: data.ja,
                kind: kind,
            }).then((res) => router.push('/viewList'))
        } catch (e) {
            console.log('error')
        }
    }

    if (!user) {
        return (
            <div className={styles.containar}>
                <Alert status="error">
                    <AlertIcon />
                    {en.errorAlert.message}
                </Alert>
            </div>
        )
    }

    return (
        <div className={styles.containar}>
            <SignOutButton />
            <div className={styles.titleBox}>
                <h1>{en.record.title}</h1>
            </div>
            <div>
                <Alert status="info">
                    <AlertIcon />
                    {en.record.info}
                </Alert>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={!!errors.eng}>
                    <FormLabel htmlFor="name">{en.record.menu1}</FormLabel>
                    <Textarea {...register('eng')} />
                    <Text color="red.400">
                        {errors.eng && errors.eng.message}
                    </Text>
                </FormControl>
                <FormControl isInvalid={!!errors.ja}>
                    <FormLabel htmlFor="name">{en.record.menu2}</FormLabel>
                    <div>
                        <Textarea {...register('ja')} />
                        <Text color="red.400">
                            {errors.ja && errors.ja.message}
                        </Text>
                    </div>
                </FormControl>
                <div>
                    <FormLabel>{en.record.menu3}</FormLabel>
                    <div>
                        <RadioGroup onChange={setKind} value={kind}>
                            <Stack direction="row">
                                {recordRadio.map(
                                    (item: recordRadioType, index: number) => (
                                        <Radio key={index} value={item.value}>
                                            {item.content}
                                        </Radio>
                                    )
                                )}
                            </Stack>
                        </RadioGroup>
                    </div>
                    <div>
                        <Button type="submit" isLoading={isSubmitting}>
                            {en.record.submitButton}
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Record
