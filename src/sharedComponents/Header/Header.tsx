import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.scss';
import logoUrl from '@icons/logo.svg';
import logoUrlMobile from '@icons/logoMobile.svg';
import burger from '@icons/burger.svg';

import LanguageDropdown from '@components/LanguageDropdown/LanguageDropdown';
import Button from '@components/Button/Button';
import Container from '@components/Container/Container';

export default function Header() {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerContent}>
          <div className={styles.logoSection} onClick={handleLogoClick}>
            <img src={logoUrl} alt="FADDER Logo" className={styles.logoIcon} />
            <img src={logoUrlMobile} alt="FADDER Logo" className={styles.logoMobile} />
          </div>

          <div className={styles.navSection}>
            <nav className={styles.navLinks}>
              <a href="#" className={styles.navLink}>
                {t("header.delivery")}
              </a>
              <a href="#" className={styles.navLink}>
                {t("header.terms")}
              </a>
              <a href="#" className={styles.navLink}>
                {t("header.help")}
              </a>
              <a href="#" className={styles.navLink}>
                {t("header.about")}
              </a>
              <a href="#" className={styles.navLink}>
                {t("header.information")}
              </a>
            </nav>
          </div>

          <div className={styles.actionsSection}>
            <button className={styles.searchButton}>
              <svg className={styles.searchIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            <LanguageDropdown />

            <Button variant="secondary">{t("header.login")}</Button>
            <Button variant="primary">{t("header.register")}</Button>
          </div>

          <button className={styles.burgerMenu} onClick={toggleMobileMenu}>
            <img src={burger} alt="Burger" />
          </button>
        </div>
      </Container>

      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ""}`}>
        <Container>
          <nav className={styles.mobileNavLinks}>
            <a href="#" className={styles.mobileNavLink}>
              {t("header.delivery")}
            </a>
            <a href="#" className={styles.mobileNavLink}>
              {t("header.terms")}
            </a>
            <a href="#" className={styles.mobileNavLink}>
              {t("header.help")}
            </a>
            <a href="#" className={styles.mobileNavLink}>
              {t("header.about")}
            </a>
            <a href="#" className={styles.mobileNavLink}>
              {t("header.information")}
            </a>
          </nav>

          <div className={styles.mobileActions}>
            <LanguageDropdown />
            <Button variant="secondary">{t("header.login")}</Button>
            <Button variant="primary">{t("header.register")}</Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
