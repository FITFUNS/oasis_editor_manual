import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate from '@docusaurus/Translate';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig, i18n} = useDocusaurusContext();
  const isEnglish = i18n.currentLocale === 'en';
  
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          {isEnglish
            ? 'Powerful tools for 3D web development'
            : '3D 웹 개발을 위한 강력한 도구'
          }
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/usage-guide/dashboard">
            {isEnglish
              ? 'Get Started with OasisW Manual 🚀'
              : 'OasisW 메뉴얼 시작하기 🚀'
            }
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig, i18n} = useDocusaurusContext();
  const isEnglish = i18n.currentLocale === 'en';
  
  return (
    <Layout
      title={
        `${siteConfig.title} - ` + 
        (isEnglish
          ? 'Powerful tools for 3D web development' 
          : '3D 웹 개발을 위한 강력한 도구')
      }
      description={
        isEnglish
          ? 'OasisW is a powerful and intuitive tool for 3D web development.'
          : 'OasisW는 3D 웹 개발을 위한 강력하고 직관적인 도구입니다.'
      }>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
