import React, { useState } from 'react';

const FileUploadComponent = () => {
  const [file, setFile] = useState('');
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');

  const handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setFile(file);
      setImagePreviewUrl(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="previewComponent">
      <form onSubmit={() => { console.log(file); }}>
        <input className="fileInput"
          type="file"
          onChange={(e) => handleImageChange(e)} />
      </form>
      <div className="imgPreview">
        {imagePreviewUrl ? <img className="image-preview" type="image" alt='' src={imagePreviewUrl} /> : null}
      </div>
    </div>
  );
};

export default FileUploadComponent;