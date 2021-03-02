import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBo02jicEzVelRdkBA0dJCIxXBv1psHHfc",
    authDomain: "pavleu1.firebaseapp.com",
    databaseURL: "https://pavleu1.firebaseio.com",
    projectId: "pavleu1",
    storageBucket: "pavleu1.appspot.com",
    messagingSenderId: "119966468084",
    appId: "1:119966468084:web:3584d4b352307d16195ba1",
    measurementId: "G-MTENSR02T6"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
};

export const signOut = () => {
    auth.signOut();
}

// export const generateUserDocument = async (user, additionalData) => {
//     if (!user) return;
//     const userRef = firestore.collection(`Users/${user.uid}`);
//     const snapshot = await userRef.get();
//     if (!snapshot.exists) {
//         const { email, phoneNumber, uid } = user;
//         try {
//             await userRef.set({
//                 displayName,
//                 email,
//                 photoURL,
//                 ...additionalData
//             });
//         } catch (error) {
//             console.error("Error creating user document", error);
//         }
//     }
//     return getUserDocument(user.uid);
// };

export const getUserDocument = async uid => {
    if (!uid) return null;
    try {
        const userDocument = await firestore.collection(`Users`).where("uid", "==", "pfXFWl7SQdWE77DOsSeLyxVHdpr2").get();
        return {
            uid,
            ...userDocument.docs[0].data()
        };
    } catch (error) {
        console.error("Error fetching user", error);
    }
};