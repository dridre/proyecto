import "../styles/BotonInicial.css"
import axios from "axios";
import { useState, useEffect } from 'react';

const URI = "http://localhost:4000/api/travels"

export default function BotonInicial() {

    function makeid() {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < 5; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }

    const name = makeid();

    const createWeb = async e => {
        await axios.post(URI, {
            name: name
        })
        window.location.href = "/" + name
    };





    return (
        <div className="contenedorBoton">
        <button className="botonInicial" onClick={createWeb}>
            Nuevo viaje
        </button>
        </div>
    )
}

