import { TRANSLATIONS } from '../../constants/translations';
import styles from './VehicleSpecs.module.css';

interface VehicleSpecsProps {
  category: string;
  stock: number;
  warrantyInformation?: string;
  shippingInformation?: string;
  returnPolicy?: string;
}

export const VehicleSpecs = ({
  category,
  stock,
  warrantyInformation,
  shippingInformation,
  returnPolicy,
}: VehicleSpecsProps) => {
  return (
    <div>
      <h3 className={styles.sectionTitle}>{TRANSLATIONS.vehicleDetails.specificationsTitle}</h3>
      <div className={styles.specsGrid}>
        <div className={styles.specItem}>
          <span className={styles.specLabel}>{TRANSLATIONS.vehicleDetails.category}</span>
          <span className={styles.specValue}>{category}</span>
        </div>
        <div className={styles.specItem}>
          <span className={styles.specLabel}>{TRANSLATIONS.vehicleDetails.stockCount}</span>
          <span className={styles.specValue}>
            {stock} {TRANSLATIONS.vehicleDetails.units}
          </span>
        </div>
        {warrantyInformation && (
          <div className={styles.specItem}>
            <span className={styles.specLabel}>{TRANSLATIONS.vehicleDetails.warranty}</span>
            <span className={styles.specValue}>{warrantyInformation}</span>
          </div>
        )}
        {shippingInformation && (
          <div className={styles.specItem}>
            <span className={styles.specLabel}>{TRANSLATIONS.vehicleDetails.shipping}</span>
            <span className={styles.specValue}>{shippingInformation}</span>
          </div>
        )}
        {returnPolicy && (
          <div className={styles.specItem}>
            <span className={styles.specLabel}>{TRANSLATIONS.vehicleDetails.returnPolicy}</span>
            <span className={styles.specValue}>{returnPolicy}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default VehicleSpecs;
