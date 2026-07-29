import { Link } from 'react-router';

import { ROUTES } from '../../constants/general';
import { TRANSLATIONS } from '../../constants/translations';
import styles from './VehicleNotFound.module.css';

export const VehicleNotFound = () => {
  return (
    <div className={styles.notFound}>
      <h2 className={styles.notFoundTitle}>{TRANSLATIONS.vehicleDetails.notFoundTitle}</h2>
      <p className={styles.notFoundSubtitle}>{TRANSLATIONS.vehicleDetails.notFoundSubtitle}</p>
      <Link to={ROUTES.HOME} className={styles.backLink}>
        ← {TRANSLATIONS.vehicleDetails.backButton}
      </Link>
    </div>
  );
};

export default VehicleNotFound;
