
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBmfFymFoAuq_-hrZPHJKnh9kK6jIX6J14",
  authDomain: "riotblog-a7f84.firebaseapp.com",
  projectId: "riotblog-a7f84",
  storageBucket: "riotblog-a7f84.appspot.com",
  messagingSenderId: "1053763888512",
  appId: "1:1053763888512:web:30c78a92aa8d5cd25a0d65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//serviço de banco de dados do google
const db = getFirestore(app) 

export { db }