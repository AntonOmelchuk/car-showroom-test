import { useState } from 'react';

import { TRANSLATIONS } from '../../constants/translations';
import styles from './VehicleGallery.module.css';

interface VehicleGalleryProps {
  title: string;
  thumbnail: string;
  images?: string[];
  isAvailable: boolean;
}

export const VehicleGallery = ({
  title,
  thumbnail,
  images = [],
  isAvailable,
}: VehicleGalleryProps) => {
  const [activeImage, setActiveImage] = useState<string>(thumbnail || images[0] || '');
  const galleryImages = images.length > 0 ? images : [activeImage];

  return (
    <div className={styles.gallerySection}>
      <div className={styles.mainImageContainer}>
        <img src={activeImage} alt={title} className={styles.mainImage} />
        <span className={`${styles.badge} ${isAvailable ? styles.inStock : styles.outOfStock}`}>
          {isAvailable
            ? TRANSLATIONS.vehicleDetails.inStock
            : TRANSLATIONS.vehicleDetails.outOfStock}
        </span>
      </div>

      {galleryImages.length > 1 && (
        <div className={styles.thumbnails}>
          {galleryImages.map((img, index) => (
            <button
              key={`${img}-${index}`}
              type="button"
              className={`${styles.thumbnailBtn} ${
                activeImage === img ? styles.activeThumbnail : ''
              }`}
              onClick={() => setActiveImage(img)}
            >
              <img
                src={img}
                alt={`${title} thumbnail ${index + 1}`}
                className={styles.thumbnailImg}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default VehicleGallery;
