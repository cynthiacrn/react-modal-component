import React from "react";
import "./SuccessModal.css";

/**
 * SuccessModal is a reusable component that represents a modal displaying a success message or content.
 * It is used to provide visual feedback to the user when a successful action or operation has occurred.
 *
 * @component
 * @param {boolean} open - Controls the visibility of the success modal. If true, the modal is displayed; otherwise, it is hidden.
 * @param {function} setOpen - Callback function to control the open state of the success modal.
 * @param {Object} containerStyle - Custom CSS styles to be applied to the success modal container.
 * @param {ReactNode} children - The content to be displayed within the success modal.
 * @returns {JSX.Element|null} - The rendered SuccessModal component.
 */
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