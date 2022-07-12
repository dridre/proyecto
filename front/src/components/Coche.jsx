import "../styles/Coche.css"


import axios from "axios";

export default function Coche() {

    const res = await axios.put('/api/article/123', {
        name: 'Making PUT Requests with Axios',
    });

  return (
    <div>Coche</div>
  )
}
