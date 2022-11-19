import React from 'react';

const ConfirmationModal = ({ title, message, closeModal, successModal, modalData }) => {
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => successModal(modalData)} htmlFor="confirmation-modal" className="btn btn-accent btn-sm">Delete</label>

                        <label onClick={closeModal} htmlFor="confirmation-modal" className="btn btn-accent btn-sm">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;