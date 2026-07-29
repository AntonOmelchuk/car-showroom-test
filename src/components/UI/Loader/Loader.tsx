import { TRANSLATIONS } from '../../../constants/translations';
import styles from './Loader.module.css';

interface LoaderProps {
  message?: string;
}

const Loader = ({ message = TRANSLATIONS.ui.loading }: LoaderProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.spinner} />
      <p className={styles.text}>{message}</p>
    </div>
  );
};

export default Loader;
