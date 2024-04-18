import React, { useState } from 'react';
import axios from 'axios';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';

const apiKey = '43413497-75a48d2fe8b42d229183ed61a';

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const searchImages = async (query, resetPage = true) => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://pixabay.com/api/?q=${query}&page=${
          resetPage ? 1 : page
        }&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
      );
      const data = response.data.hits;
      setImages(resetPage ? data : [...images, ...data]);
      setPage(resetPage ? 1 : page + 1);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = query => {
    setQuery(query);
    searchImages(query, true);
  };

  const handleLoadMore = () => {
    searchImages(query, false);
  };

  const handleImageClick = imageUrl => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Searchbar onSubmit={handleSearch} />
      <ImageGallery images={images} onClick={handleImageClick} />
      {isLoading && <Loader />}
      {images.length > 0 && <Button onClick={handleLoadMore} />}
      <Modal
        isOpen={!!selectedImage}
        imageUrl={selectedImage}
        onClose={handleCloseModal}
      />
    </>
  );
};
