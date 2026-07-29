import { useEffect } from 'react';
import { Link, useParams } from 'react-router';

import Loader from '../../components/UI/Loader/Loader';
import VehicleGallery from '../../components/VehicleDetail/VehicleGallery';
import VehicleInfo from '../../components/VehicleDetail/VehicleInfo';
import VehicleNotFound from '../../components/VehicleDetail/VehicleNotFound';
import VehicleSpecs from '../../components/VehicleDetail/VehicleSpecs';
import { FETCH_STATUS, ROUTES } from '../../constants/general';
import { TRANSLATIONS } from '../../constants/translations';
import { useVehiclesStore } from '../../stores/useVehicleStore';
import styles from './VehicleDetailPage.module.css';

export const VehicleDetailPage = () => {
  const { vehicleId } = useParams<{ vehicleId: string }>();
  const { currentVehicle, fetchVehicleById, status, clearCurrentVehicle } = useVehiclesStore();

  // Fetch vehicle details on mount and handle cleanup
  useEffect(() => {
    if (vehicleId) {
      fetchVehicleById(vehicleId);
    }

    return () => {
      clearCurrentVehicle();
    };
  }, [vehicleId, fetchVehicleById, clearCurrentVehicle]);

  if (status === FETCH_STATUS.LOADING) {
    return <Loader />;
  }

  if (!currentVehicle) {
    return <VehicleNotFound />;
  }

  const {
    title,
    brand,
    description,
    price,
    rating,
    stock,
    category,
    thumbnail,
    images = [],
    warrantyInformation,
    shippingInformation,
    returnPolicy,
  } = currentVehicle;

  const isAvailable = stock > 0;

  return (
    <div className={styles.container}>
      <Link to={ROUTES.HOME} className={styles.backLink}>
        ← {TRANSLATIONS.vehicleDetails.backButton}
      </Link>

      <div className={styles.grid}>
        <VehicleGallery
          title={title}
          thumbnail={thumbnail}
          images={images}
          isAvailable={isAvailable}
        />

        <VehicleInfo
          title={title}
          brand={brand}
          price={price}
          rating={rating}
          description={description}
        />

        <VehicleSpecs
          category={category}
          stock={stock}
          warrantyInformation={warrantyInformation}
          shippingInformation={shippingInformation}
          returnPolicy={returnPolicy}
        />
      </div>
    </div>
  );
};

export default VehicleDetailPage;
