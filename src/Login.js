import React from 'react'
import './Login.css'
import { loginUrl } from './spotify'

function Login() {
    return (
        <div className="login">
            <img
                src="https://i.computer-bild.de/imgs/1/2/9/0/9/6/7/5/Spotify-Logo-658x370-b71460ef68bd715e.jpg"
                alt="" 
                />
            <a href ={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}
export default Login