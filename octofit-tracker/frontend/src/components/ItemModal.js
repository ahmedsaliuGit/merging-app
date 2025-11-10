import React from 'react';

export default function ItemModal({show, onClose, item}){
  if(!show) return null;
  return (
    <div className="modal fade show" style={{display: 'block'}} tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Item details</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <pre style={{whiteSpace:'pre-wrap'}}>{JSON.stringify(item, null, 2)}</pre>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" onClick={onClose}></div>
    </div>
  );
}
