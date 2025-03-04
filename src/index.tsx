import * as React from "react";
import { render } from "react-dom";
import { Main } from "./Main";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCvajgN7uLmPhc5UGFSP2oKSAz7u3uikAI",
  authDomain: "blackfish-avatars.firebaseapp.com",
  projectId: "blackfish-avatars",
  storageBucket: "blackfish-avatars.firebasestorage.app",
  messagingSenderId: "464899679631",
  appId: "1:464899679631:web:92a52232bd9b1f2a6597fa",
  databaseURL:
    "https://blackfish-avatars-default-rtdb.europe-west1.firebasedatabase.app",
};

initializeApp(firebaseConfig);

const root = document.createElement("div");

render(<Main />, root);

document.body.appendChild(root);
