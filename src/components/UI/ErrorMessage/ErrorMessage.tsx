import { TRANSLATIONS } from '../../../constants/translations';
import styles from './ErrorMessage.module.css';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

const ErrorMessage = ({ message, onRetry }: ErrorMessageProps) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{TRANSLATIONS.ui.errorTitle}</h3>
      <p className={styles.message}>{message}</p>
      {onRetry && (
        <button className={styles.retryButton} onClick={onRetry}>
          {TRANSLATIONS.ui.retryButton}
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;
