import { TRANSLATIONS } from '../../constants/translations';
import type { Vehicle } from '../../types/vehicle';
import VehicleCard from './VehicleCard';
import styles from './VehicleList.module.css';

interface VehicleListProps {
  vehicles: Vehicle[];
}

const VehicleList = ({ vehicles }: VehicleListProps) => {
  if (vehicles.length === 0) {
    return <div className={styles.empty}>{TRANSLATIONS.home.notFound}</div>;
  }

  return (
    <div className={styles.grid}>
      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>
  );
};

export default VehicleList;
