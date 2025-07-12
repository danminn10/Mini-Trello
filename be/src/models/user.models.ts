import db from '@config/firebase';
import admin from 'firebase-admin';
export interface User {
    id: string;
    username: string;
    email: string;
    createdAt: FirebaseFirestore.Timestamp;
    isActive: boolean;
}
const createSampleUser = async (): Promise<User> => {
    const user: User = {
        id: 'user1',
        username: 'sampleUser',
        email: 'sample123@gmail.com',
        createdAt: admin.firestore.Timestamp.now(),
        isActive: true,
    }
    await db.collection('users').doc(user.id).set(user);
    console.log('Sample user created:', user);
    return user;
}
createSampleUser()
    .then(() => console.log('Sample user creation completed'))
    .catch(console.error);
export default createSampleUser;
