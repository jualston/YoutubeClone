import { Fragment } from "react";
import { signinWithGoogle,signOut } from "../firebase/firebase";
import styles from "./sign-in.module.css";
import { User } from "firebase/auth";

interface SignInProps{
    user: User|null;
}
export default function SignIn({user}:SignInProps){
//tenary operator that renders signout when there is a user(signedin) and render signin when user is null (signed out)
    return(
        <Fragment>
            
            { user? 
            (<button className={styles.signin} onClick={signOut}>
                Sign Out</button>

            ):
            (
            <button className={styles.signin} onClick={signinWithGoogle}>
                Sign In</button>
            )
                
            }
            
            
        </Fragment>
    )
}