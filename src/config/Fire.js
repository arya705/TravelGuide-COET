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
    apiKey: "AIzaSyBCXUnoodowk5WHqafQh2wvgrOqQK3jSHw",
    authDomain: "travelguide-coet.firebaseapp.com",
    projectId: "travelguide-coet",
    storageBucket: "travelguide-coet.appspot.com",
    messagingSenderId: "545885777286",
    appId: "1:545885777286:web:cf4272b6f181065d97d007",
    measurementId: "G-JQFLHL78QV"
};



const fire = firebase.initializeApp(config);
export default fire;