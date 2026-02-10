import { useState } from "react";
import PinModal from "./PinModal";
import "./Pin.css";

function Pin({ pin }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="pin" onClick={() => setOpen(true)}>
        <img src={pin.image} alt={pin.title} />
        <div className="overlay">
          <button className="save-btn">Guardar</button>
        </div>
      </div>

      {open && <PinModal pin={pin} onClose={() => setOpen(false)} />}
    </>
  );
}

export default Pin;
