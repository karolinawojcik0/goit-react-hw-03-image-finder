import React from 'react';

export const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className="gallery">
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} onClick={onClick} />
      ))}
    </ul>
  );
};
