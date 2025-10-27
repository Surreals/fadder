import React from 'react';
import { useTranslation } from 'react-i18next';

import Container from '@components/Container/Container';
import LanguageDropdown from '@components/LanguageDropdown/LanguageDropdown';
import instagramIcon from '@assets/icons/instagram.svg';
import facebookIcon from '@assets/icons/facebook.svg';
import youtubeIcon from '@assets/icons/youtube.svg';
import linkedinIcon from '@assets/icons/linkedin.svg';

import styles from './Footer.module.scss';
import Flex from "@components/Flex";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <Container>
          <div className={styles.topContent}>
            <div className={styles.leftSide}>
              <LanguageDropdown />
              <Flex vertical gap={32}>
                <div className={styles.contactInfo}>
                  <p>Email: support@yourwebsite.com</p>
                  <p>Address: 123 Auto Avenue, Miami, FL, USA</p>
                </div>
                <div className={styles.socialMedia}>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    <img src={instagramIcon} alt="Instagram" />
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    <img src={facebookIcon} alt="Facebook" />
                  </a>
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    <img src={youtubeIcon} alt="YouTube" />
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    <img src={linkedinIcon} alt="LinkedIn" />
                  </a>
                </div>
              </Flex>
            </div>
            <div className={styles.rightSide}>
              <div className={styles.navColumns}>
                <div className={styles.navColumn}>
                  <h3>Vehicle Type</h3>
                  <ul>
                    <li>
                      <a href="#">Cars</a>
                    </li>
                    <li>
                      <a href="#">Trucks</a>
                    </li>
                    <li>
                      <a href="#">RVs</a>
                    </li>
                    <li>
                      <a href="#">Motorcycles</a>
                    </li>
                    <li>
                      <a href="#">Buses</a>
                    </li>
                    <li>
                      <a href="#">Trailers</a>
                    </li>
                    <li>
                      <a href="#">Boats</a>
                    </li>
                    <li>
                      <a href="#">Jet Skis</a>
                    </li>
                    <li>
                      <a href="#">Snowmobiles</a>
                    </li>
                    <li>
                      <a href="#">Industrial Machinery</a>
                    </li>
                  </ul>
                </div>

                <div className={styles.navColumn}>
                  <h3>Brand</h3>
                  <ul>
                    <li>
                      <a href="#">Acura</a>
                    </li>
                    <li>
                      <a href="#">Audi</a>
                    </li>
                    <li>
                      <a href="#">BMW</a>
                    </li>
                    <li>
                      <a href="#">Chevrolet</a>
                    </li>
                    <li>
                      <a href="#">Cadillac</a>
                    </li>
                    <li>
                      <a href="#">Honda</a>
                    </li>
                    <li>
                      <a href="#">Kia</a>
                    </li>
                    <li>
                      <a href="#">Jeep</a>
                    </li>
                    <li>
                      <a href="#">Lexus</a>
                    </li>
                    <li>
                      <a href="#">Subaru</a>
                    </li>
                  </ul>
                </div>

                <div className={styles.navColumn}>
                  <h3>Country</h3>
                  <ul>
                    <li>
                      <a href="#">United States</a>
                    </li>
                    <li>
                      <a href="#">Canada</a>
                    </li>
                    <li>
                      <a href="#">United Kingdom</a>
                    </li>
                    <li>
                      <a href="#">Germany</a>
                    </li>
                    <li>
                      <a href="#">France</a>
                    </li>
                    <li>
                      <a href="#">Ukraine</a>
                    </li>
                    <li>
                      <a href="#">Georgia</a>
                    </li>
                    <li>
                      <a href="#">Saudi Arabia</a>
                    </li>
                    <li>
                      <a href="#">Japan</a>
                    </li>
                    <li>
                      <a href="#">Australia</a>
                    </li>
                  </ul>
                </div>

                <div className={styles.navColumn}>
                  <h3>Auction</h3>
                  <ul>
                    <li>
                      <a href="#">Today's Auctions</a>
                    </li>
                    <li>
                      <a href="#">Auctions Calendar</a>
                    </li>
                    <li>
                      <a href="#">Join Auction</a>
                    </li>
                    <li>
                      <a href="#">Night Cap Sales</a>
                    </li>
                    <li>
                      <a href="#">Bank-Repo Vehicles</a>
                    </li>
                    <li>
                      <a href="#">Rental Auctions</a>
                    </li>
                    <li>
                      <a href="#">Wholesale Auctions</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className={styles.mapSection}>
        <Container>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368450567!3d40.71312997933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sua!4v1640995200000!5m2!1sen!2sua"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "16px" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="World Map"
          />
        </Container>
      </div>
      <div className={styles.bottomSection}>
        <Container>
          <div className={styles.bottomLinks}>
            <a href="#">Blog</a>
            <a href="#">Terms</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Contact</a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
