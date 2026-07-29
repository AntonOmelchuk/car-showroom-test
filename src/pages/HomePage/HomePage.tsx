import { useEffect, useMemo, useState } from 'react';

import ErrorMessage from '../../components/UI/ErrorMessage/ErrorMessage';
import Loader from '../../components/UI/Loader/Loader';
import VehicleFilter from '../../components/Vehicle/VehicleFilter';
import VehicleList from '../../components/Vehicle/VehicleList';
import { FETCH_STATUS } from '../../constants/general';
import { TRANSLATIONS } from '../../constants/translations';
import { useSearch } from '../../hooks/useSearch';
import { useVehiclesStore } from '../../stores/useVehicleStore';
import { SORT_OPTIONS, type SortOption } from '../../types/filter';
import styles from './HomePage.module.css';

const HomePage = () => {
  const { vehicles, status, error, fetchVehicles } = useVehiclesStore();

  // Search hook with input validation, sanitization, and debouncing
  const {
    value: searchValue,
    query: searchQuery,
    onChange: handleSearchChange,
  } = useSearch('', {
    maxLength: 40,
    debounceDelay: 300,
  });

  const [sortBy, setSortBy] = useState<SortOption>(SORT_OPTIONS.DEFAULT);

  useEffect(() => {
    fetchVehicles();
  }, [fetchVehicles]);

  // Compute filtered and sorted vehicles list based on debounced search query and sort state
  const filteredAndSortedVehicles = useMemo(() => {
    let result = vehicles;

    if (searchQuery) {
      result = result.filter((v) => v.title.toLowerCase().includes(searchQuery));
    }

    if (sortBy === SORT_OPTIONS.PRICE_ASC) {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === SORT_OPTIONS.PRICE_DESC) {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortBy === SORT_OPTIONS.RATING_DESC) {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [vehicles, searchQuery, sortBy]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{TRANSLATIONS.home.title}</h1>

      <VehicleFilter
        searchQuery={searchValue}
        onSearchChange={handleSearchChange}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      {status === FETCH_STATUS.LOADING && <Loader />}

      {status === FETCH_STATUS.ERROR && (
        <ErrorMessage message={error || TRANSLATIONS.errors.fetchFailed} onRetry={fetchVehicles} />
      )}

      {status === FETCH_STATUS.SUCCESS && <VehicleList vehicles={filteredAndSortedVehicles} />}
    </div>
  );
};

export default HomePage;
