import { dataRecordType } from '@/shared/types/record'

export const getData = async (url: string): Promise<dataRecordType[]> => {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    return data as dataRecordType[]
}
