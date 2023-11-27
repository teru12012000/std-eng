import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
//import { getFirestore } from 'firebase/firestore'
//import { ServiceAccount, cert } from 'firebase-admin/app'
//import admin from 'firebase-admin'

//import serviceAccount from '../../../it-english-project-firebase-adminsdk-dxlxl-e8c16c4a04.json'
//import { getAuth } from 'firebase-admin/auth'
//import { getFirestore } from 'firebase-admin/firestore'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSASGE_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    databaseURL: `https://${process.env.NEXT_PUBLIC_PROJECT_ID}.firebaseio.com`,
}

const app = initializeApp(firebaseConfig)
/*if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}*/
export const auth = getAuth(app)
//export const provider = new firebase.auth.GoogleAuthProvider()
export const provider = new GoogleAuthProvider()
//export const db = getFirestore(app)
//import { getAuth } from 'firebase-admin/auth'*/
import { getFirestore } from 'firebase-admin/firestore'
import { cert } from 'firebase-admin/app'
const serviceAccount = require('../../../it-english-project-firebase-adminsdk-dxlxl-e8c16c4a04.json')
const admin = require('firebase-admin')
if (admin.apps.length === 0) {
    admin.initializeApp({
        credential: cert(serviceAccount),
    })
}

//export const auth = getAuth()
export const db = getFirestore()
