import { Link } from 'react-router';

import { ROUTES } from '../../constants/general';
import { TRANSLATIONS } from '../../constants/translations';
import styles from './NotFoundPage.module.css';

export const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.code}>{TRANSLATIONS.notFoundPage.title}</h1>
      <h2 className={styles.title}>{TRANSLATIONS.notFoundPage.subtitle}</h2>
      <p className={styles.description}>{TRANSLATIONS.notFoundPage.description}</p>

      <Link to={ROUTES.HOME} className={styles.homeBtn}>
        {TRANSLATIONS.notFoundPage.homeButton}
      </Link>
    </div>
  );
};

export default NotFoundPage;
