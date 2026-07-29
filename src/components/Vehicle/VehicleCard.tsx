import { Link } from 'react-router';

import { ROUTES } from '../../constants/general';
import { TRANSLATIONS } from '../../constants/translations';
import type { Vehicle } from '../../types/vehicle';
import styles from './VehicleCard.module.css';

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  const { id, title, price, rating, stock, brand, thumbnail } = vehicle;
  const isAvailable = stock > 0;

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={thumbnail} alt={title} className={styles.image} loading="lazy" />
        <span className={`${styles.badge} ${isAvailable ? styles.inStock : styles.outOfStock}`}>
          {isAvailable ? TRANSLATIONS.vehicle.inStock : TRANSLATIONS.vehicle.outOfStock}
        </span>
      </div>

      <div className={styles.content}>
        {brand && <span className={styles.brand}>{brand}</span>}
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.rating}>
          <span>★</span>
          <span>{rating.toFixed(1)}</span>
        </div>

        <div className={styles.footer}>
          <div className={styles.price}>${price.toLocaleString()}</div>
          <Link
            to={ROUTES.VEHICLE_DETAILS.replace(':vehicleId', String(id))}
            className={styles.button}
          >
            {TRANSLATIONS.vehicle.detailsButton}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
