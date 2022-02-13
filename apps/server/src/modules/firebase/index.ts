/**
 * @see https://firebase.google.com/docs/admin/setup
 */
import fb from 'firebase-admin'
import serviceAccount from '../../cert/firebase/index.json'

const admin = fb.initializeApp({
  credential: fb.credential.cert(serviceAccount as fb.ServiceAccount),
  databaseURL: 'https://<PROJECT_URI>.firebaseapp.com',
  databaseAuthVariableOverride: {
    uid: '<SOME_ID>-service-agent'
  }
})

const settings = { timestampsInSnapshots: true }
admin.firestore().settings(settings)

export { admin, fb }