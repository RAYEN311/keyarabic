import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
  

const firebaseConfig = {
  apiKey: "AIzaSyAtfrYftZkHmrJ_wPw7gkPIsdm6RPWh_aI",
  authDomain: "keyarabice.firebaseapp.com",
  projectId: "keyarabice",
  storageBucket: "keyarabice.appspot.com",
  messagingSenderId: "317553198376",
  appId: "1:317553198376:web:50da331737e95a780ebc1d",
  measurementId: "G-JJW01F6GBE"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);