import React from "react";
import "./SuccessModal.css";

function SuccessModal({ open, setOpen, containerStyle = {}, children }) {
  if (open) {
    return (
      <div className="success-modal" onClick={() => setOpen(false)}>
        <div className="success-modal__content" style={containerStyle}>
          {children}
        </div>
      </div>
    )
  }

  return null
}

export default SuccessModal

