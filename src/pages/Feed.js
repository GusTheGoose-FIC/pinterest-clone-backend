import { useEffect, useState } from "react";
import api from "../api";
import "./Feed.css";

export default function Feed() {
  const [pins, setPins] = useState([]);

  useEffect(() => {
    api.get("/pins").then(res => setPins(res.data));
  }, []);

  return (
    <div className="masonry">
      {pins.map(pin => (
        <div key={pin._id} className="pin">
          <img src={`https://TU_BACKEND.onrender.com${pin.image}`} alt="" />
          <h4>{pin.title}</h4>
        </div>
      ))}
    </div>
  );
}
