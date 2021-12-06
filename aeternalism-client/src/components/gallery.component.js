import React, { useState } from 'react';
import ViewNft from './view-nft.component';

let imgUrls = [
  'https://source.unsplash.com/3Z70SDuYs5g/800x600',
  'https://source.unsplash.com/01vFmYAOqQ0/800x600',
  'https://source.unsplash.com/2Bjq3A7rGn4/800x600',
  'https://source.unsplash.com/t20pc32VbrU/800x600',
  'https://source.unsplash.com/pHANr-CpbYM/800x600',
  'https://source.unsplash.com/3PmwYw2uErY/800x600',
  'https://source.unsplash.com/uOi3lg8fGl4/800x600',
  // 'https://source.unsplash.com/CwkiN6_qpDI/800x600',
  // 'https://source.unsplash.com/9O1oQ9SzQZQ/800x600',
  // 'https://source.unsplash.com/E4944K_4SvI/800x600',
  // 'https://source.unsplash.com/-hI5dX2ObAs/800x600',
  // 'https://source.unsplash.com/vZlTg_McCDo/800x600'
];

// Component for gallery
const Gallery = () => {

  const [showModal, setShowModal] = useState(false);
  const [url, setUrl] = useState('');

  const closeModal = () => {
    setUrl('');
    setShowModal(false);
  };

  const openModal = (url, e) => {
    setUrl(url);
    setShowModal(true);
  };


  return (
    <div refs='gallery-container' className=''>
      <div className='row'>
        {
          imgUrls.map((src, index) => {
            return <div className='col-sm-4' key={index} >
              <div className='gallery-card' onClick={() => openModal(src)} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <img className='gallery-thumbnail' src={src} alt={'Image number ' + (index + 1)} />

              </div>
            </div>;
          })
        }

        <ViewNft url={url} />
      </div>

    </div >
  );
};

export default Gallery;;