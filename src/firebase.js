import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "Your Key",
    authDomain: "Your Domain",
    databaseURL: "Your URL",
    projectId: "pavleu1",
    storageBucket: "Your Bucket",
    messagingSenderId: "Your Sender Id",
    appId: "Your AppID",
    measurementId: "Your MeasurementId"
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
        const userDocument = await firestore.collection(`Users`).where("uid", "==", uid).get();
        const userInfo = userDocument.docs.length ? userDocument.docs[0].data() : null;
        return {
            uid,
            ...userInfo
        };
    } catch (error) {
        console.error("Error fetching user", error);
    }
};
