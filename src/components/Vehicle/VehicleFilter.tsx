import { TRANSLATIONS } from '../../constants/translations';
import { SORT_OPTIONS, type SortOption } from '../../types/filter';
import styles from './VehicleFilter.module.css';

interface VehicleFilterProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
}

const VehicleFilter = ({
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
}: VehicleFilterProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.searchGroup}>
        <input
          type="text"
          className={styles.input}
          placeholder={TRANSLATIONS.home.searchPlaceholder}
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className={styles.sortGroup}>
        <label htmlFor="sort-select" className={styles.label}>
          {TRANSLATIONS.home.sortLabel}
        </label>
        <select
          id="sort-select"
          className={styles.select}
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
        >
          <option value={SORT_OPTIONS.DEFAULT}>{TRANSLATIONS.home.sortOptions.default}</option>
          <option value={SORT_OPTIONS.PRICE_ASC}>{TRANSLATIONS.home.sortOptions.priceAsc}</option>
          <option value={SORT_OPTIONS.PRICE_DESC}>{TRANSLATIONS.home.sortOptions.priceDesc}</option>
          <option value={SORT_OPTIONS.RATING_DESC}>
            {TRANSLATIONS.home.sortOptions.ratingDesc}
          </option>
        </select>
      </div>
    </div>
  );
};

export default VehicleFilter;
