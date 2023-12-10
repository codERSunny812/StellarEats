import { createContext } from "react";
import { initializeApp  } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBVgqpvgruTIrjmdNcF7_88PpPJ92QSteU",
    authDomain: "foodapp-e55a3.firebaseapp.com",
    projectId: "foodapp-e55a3",
    storageBucket: "foodapp-e55a3.appspot.com",
    messagingSenderId: "1030901474274",
    appId: "1:1030901474274:web:3d02058ba8f52000b38fbb",
    measurementId: "G-JDZ7STYQTZ"
};


const fireBaseApp = initializeApp(firebaseConfig);
const fireBaseAuth = getAuth(fireBaseApp);





export const FireBaseContext = createContext(null);

export  const FireBaseContextProvider = (props) =>{ 

return(
    <FireBaseContext.Provider>
        {
            props.children
        }
    </FireBaseContext.Provider>
)
} 