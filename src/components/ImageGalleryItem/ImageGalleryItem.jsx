import { GalleryImage, GalleryItem } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';
import { useCallback } from 'react';

function ImageGalleryItem({ webformatURL, tags, largeImageURL, onImageClick }) {
  const handleClick = useCallback(
    evt => {
      evt.preventDefault();
      onImageClick({ largeImageURL, tags });
    },
    [largeImageURL, onImageClick, tags]
  );

  return (
    <GalleryItem onClick={handleClick}>
      <GalleryImage src={webformatURL} alt={tags} />
    </GalleryItem>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
