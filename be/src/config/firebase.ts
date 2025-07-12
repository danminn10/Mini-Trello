import admin from 'firebase-admin';


var serviceAccount = require('../../../be/connectFirebase.key.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://mini-trello-50705-default-rtdb.asia-southeast1.firebasedatabase.app"
});
const db = admin.firestore();

export default db;