import { db } from '@/lib/firebase/firebase'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(
    request: NextRequest,
    { params }: { params: { uid: string } }
) {
    const uid = params.uid
    const body = await request.json()
    const postData = db.collection(uid as string)
    try {
        await db.collection(uid as string).add(body)
        return NextResponse.json({ message: 'OK' })
    } catch (e) {
        return NextResponse.json({ message: 'ERROR' })
    }
}
