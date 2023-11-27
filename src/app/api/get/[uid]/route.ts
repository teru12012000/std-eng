import { db } from '@/lib/firebase/firebase'
import { collection } from 'firebase/firestore'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
    request: NextRequest,
    { params }: { params: { uid: string } }
) {
    const uid = params.uid
    const snapshot = await db.collection(uid).get()
    const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
    }))
    return NextResponse.json(data)
}
