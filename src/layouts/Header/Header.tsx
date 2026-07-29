import { THEME_OPTIONS } from '../../constants/general';
import { TRANSLATIONS } from '../../constants/translations';
import { useTheme } from '../../hooks/useTheme';
import styles from './Header.module.css';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const isLight = theme === THEME_OPTIONS.LIGHT;
  const themeIcon = isLight ? '🌙' : '☀️';
  const themeLabel = isLight ? TRANSLATIONS.header.themeDark : TRANSLATIONS.header.themeLight;

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <div>
          <h1 className={styles.title}>{TRANSLATIONS.header.title}</h1>
          <p className={styles.subtitle}>{TRANSLATIONS.header.subtitle}</p>
        </div>

        <button
          type="button"
          className={styles.themeToggleBtn}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          <span>{themeIcon}</span>
          <span>{themeLabel}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
