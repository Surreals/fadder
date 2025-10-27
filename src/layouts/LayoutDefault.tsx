import { ConfigProvider } from 'antd';
import '../i18n/index';
import '@styles/global.css';

import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import { antdTheme } from '@styles/antdTheme';

import styles from './LayoutDefault.module.scss';

export function MainPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider theme={antdTheme}>
      <div className={styles.mainLayout}>
        <main className={styles.mainContent}>
          {children}
        </main>
      </div>
    </ConfigProvider>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider theme={antdTheme}>
      <div className={styles.mainLayout}>
        <Header />
        <main className={styles.mainContent}>
          {children}
        </main>
        <Footer />
      </div>
    </ConfigProvider>
  );
}
