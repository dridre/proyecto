import "../styles/Coche.css"

import axios from "axios";
import { useState, useEffect } from 'react';

const name = window.location.href.slice(-5);
const URI = "http://localhost:4000/api/travels/" + name

export default function Coche() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const POST = async () => {
            let res = await axios.get(URI);
            setPosts(res.data[0].cars.number);
        };
        POST();
    }, []);

    var i = posts

    function nuevoCoche() {
        i++;
console.log(posts)
console.log(i)
console.log(URI)
    }

    return (
        <div>
            <button className="nuevoCoche" onClick={nuevoCoche}>
                Añadir coche
            </button>
            <div>
  
              </div>
        </div>
    )
}
