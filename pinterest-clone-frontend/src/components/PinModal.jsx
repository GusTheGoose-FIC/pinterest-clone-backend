import "./PinModal.css";

export default function PinModal({ pin, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>

        <div className="modal-body">
          <img src={pin.image} alt={pin.title} />

          <div className="pin-info">
            <h2>{pin.title}</h2>
            <p>{pin.description}</p>

            <div className="pin-user">
              <div className="avatar">{pin.user[0]}</div>
              <span>{pin.user}</span>
            </div>

            <button className="save-main">Guardar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
