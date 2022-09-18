import firebase from 'firebase';

// const config = {
//     apiKey: "AIzaSyAaCElud0Ife0vkits2BScONMaX_nw--As",
//     authDomain: "vicode-media.firebaseapp.com",
//     projectId: "vicode-media",
//     storageBucket: "vicode-media.appspot.com",
//     messagingSenderId: "420658677235",
//     appId: "1:420658677235:web:eac7e5990ee0ebe38b7e86"
// };

const config = {
    apiKey: "AIzaSyAW3SBgyKl4vYxkKFjECtMXkCoQ1uejVBM",
    authDomain: "travelguide-coet-ac711.firebaseapp.com",
    projectId: "travelguide-coet-ac711",
    storageBucket: "travelguide-coet-ac711.appspot.com",
    messagingSenderId: "1030347651290",
    appId: "1:1030347651290:web:c99517c2c407b249f94de3"
};



const fire = firebase.initializeApp(config);
export default fire;