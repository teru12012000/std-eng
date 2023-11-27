import type { sendRecordType } from '@/shared/types/record'

export const postData = async (
    uid: string,
    data: sendRecordType
): Promise<void> => {
    const res = await fetch(`/api/post/${uid}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
}
