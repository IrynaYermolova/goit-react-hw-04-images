// import React, { Component } from 'react';
import { AppWrapper } from '../components/Searchbar/App.styled';
import fetchImages from '../components/FetchApi/fetchApi';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import { useState, useEffect } from 'react';

export function App() {
  const [images, setImages] = useState([]);
  const [value, setValue] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setIsModalData] = useState(null);

  useEffect(() => {
    if (value !== '') {
      setIsLoading(true);
      fetchImages(value, page)
        .then(({ data }) =>
          setImages(prevImages => [...prevImages, ...data.hits])
        )
        .catch(err => alert(err.message))
        .finally(() => setIsLoading(false));
    }
  }, [value, page]);

  const handleSearchbarSubmit = value => {
    setValue(value);
    setPage(1);
    setImages([]);
  };
  const setModalData = modalData => {
    setIsModalData(modalData);
    setIsModalOpen(true);
  };
  const changePage = () => {
    setPage(prevPage => prevPage + 1);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Searchbar onFormSubmit={handleSearchbarSubmit} />
      <AppWrapper>
        <ImageGallery images={images} onImageClick={setModalData} />
      </AppWrapper>
      {isLoading ? (
        <Loader />
      ) : (
        images.length > 0 && <Button onClick={changePage} />
      )}
      {isModalOpen && (
        <Modal modalData={modalData} onModalClose={handleModalClose} />
      )}
    </>
  );
}

export default App;
