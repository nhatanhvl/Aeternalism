import React from 'react';
import FileUploadComponent from './fileUpload.component';

const CreateNft = () => {
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Create NFT</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Input name" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Input description" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Image</label>
              <FileUploadComponent />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Create</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNft;