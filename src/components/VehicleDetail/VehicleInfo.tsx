import { TRANSLATIONS } from '../../constants/translations';
import styles from './VehicleInfo.module.css';

interface VehicleInfoProps {
  title: string;
  brand?: string;
  price: number;
  rating: number;
  description: string;
}

export const VehicleInfo = ({ title, brand, price, rating, description }: VehicleInfoProps) => {
  return (
    <div className={styles.infoGroup}>
      <div>
        {brand && <span className={styles.brand}>{brand}</span>}
        <h1 className={styles.title}>{title}</h1>
      </div>

      <div className={styles.priceRatingGroup}>
        <div className={styles.price}>${price.toLocaleString()}</div>
        <div className={styles.rating}>
          <span>★</span>
          <span>{rating.toFixed(1)}</span>
        </div>
      </div>

      <div>
        <h3 className={styles.sectionTitle}>{TRANSLATIONS.vehicleDetails.descriptionTitle}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default VehicleInfo;
