import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyCn2kBRuPsa0X692LZzXeAGzMDCsk9VvD0",
//   authDomain: "artify-e5563.firebaseapp.com",
//   databaseURL: "https://artify-e5563-default-rtdb.firebaseio.com",
//   projectId: "artify-e5563",
//   storageBucket: "artify-e5563.firebasestorage.app",
//   messagingSenderId: "472994702242",
//   appId: "1:472994702242:web:177170752198893fbe88fb",
//   measurementId: "G-JYJHVXTZHE"
// };

const firebaseConfig = {
  apiKey: "AIzaSyAIB_E9l9CQZaX3tpweBq7GbP7caIzGFzU",
  authDomain: "artifyai-b4057.firebaseapp.com",
  projectId: "artifyai-b4057",
  storageBucket: "artifyai-b4057.firebasestorage.app",
  messagingSenderId: "124768960689",
  appId: "1:124768960689:web:d373be2bc4cbf13ecea290",
  measurementId: "G-GCC520544G"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };




// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//     apiKey: "AIzaSyC2dnuyk2Y1Kl9xOal_1Kp_VxyqGMvo6-M",
//     authDomain: "artbongo-project.firebaseapp.com",
//     projectId: "artbongo-project",
//     storageBucket: "artbongo-project.appspot.com",
//     messagingSenderId: "13641894930",
//     appId: "1:13641894930:web:8b4fb82f1182637a7a9ccb",
//     measurementId: "G-DS22927DDL"
//   };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const firestore = getFirestore(app);
// const storage = getStorage(app);

// export { app, auth, firestore, storage };