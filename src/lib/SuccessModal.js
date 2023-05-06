import React from "react";
import "./SuccessModal.css";

function SuccessModal({ open, setOpen }) {
  if (open) {
    return (
      <div className="success-modal" onClick={() => setOpen(false)}>
        <div className="success-modal__content">
          <p>Employee Created!</p>
          <span onClick={() => setOpen(false)} className="success-modal__close-icon">&times;</span>
        </div>
      </div>
    )
  }

  return null
}

export default SuccessModal

