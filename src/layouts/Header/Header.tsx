import { Link } from 'react-router';

import { ROUTES } from '../../constants/general';
import { TRANSLATIONS } from '../../constants/translations';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to={ROUTES.HOME} className={styles.logo}>
          <h1 className={styles.title}>{TRANSLATIONS.header.title}</h1>
          <span className={styles.subtitle}>{TRANSLATIONS.header.subtitle}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
