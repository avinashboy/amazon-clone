import fb from 'firebase'
import {googleApi} from '../key/key'

const fbapp = fb.initializeApp(googleApi)

const db = fbapp.firestore()
const auth = fb.auth()

export {auth, db}