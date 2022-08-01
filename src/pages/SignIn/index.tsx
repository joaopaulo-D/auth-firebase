import React, { useState } from "react";

import { FcGoogle } from "react-icons/fc";

import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { auth } from "../../services/firebase";

import "./styles.scss";

export default function SignIn() {

    const [user, setUser] = useState<User>({} as User);
    const [error, setError] = useState<string | null>(null);

    const handleSignInGoogle = () => {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then(response => {
                console.log(response.user)
                setUser(response.user);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <div className="container">
            <div className="user">
                {user.photoURL && <img src={user.photoURL} alt="Foto do usuário" />}

                <strong>{user.displayName}</strong>
                <small>{user.email}</small>
            </div>

            <h1>Acesse sua conta</h1>

            <span>
                Utilizando autenticação social, por exemplo, autenticação com a Google você <br />
                facilita a vida do usuário permitindo utilizar a aplicação sem fazer cadastrado.
            </span>

            <button type="button" onClick={handleSignInGoogle} className="button">
                <FcGoogle size={30}/>
                SignIn with Google
            </button>
        </div>
    );
}