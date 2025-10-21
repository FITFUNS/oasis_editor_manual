import clsx from 'clsx';
import Heading from '@theme/Heading';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

function getFeatureList(isEnglish) {
  return [
    {
      title: isEnglish ? 'Easy to Use' : '쉬운 사용법',
      image: '/engine/assets/1.png',
      description: (
        <>
          {isEnglish
            ? 'You can learn step by step, from basics to advanced, easily and clearly, using the manual.'
            : '메뉴얼을 따라 기초부터 고급까지, 쉽고 명확하게 한 단계씩 배울 수 있습니다.'
          }
        </>
      ),
    },
    {
      title: isEnglish ? 'Create with AI Tools' : 'AI 도구로 쉽게 만들기',
      image: '/engine/assets/2.png',
      description: (
        <>
          {isEnglish
            ? 'With AI tools, you can create images and code.'
            : 'AI 도구를 활용하여 이미지와 코드를 생성할 수 있습니다.'
          }
        </>
      ),
    },
    {
      title: isEnglish ? 'Various Tools' : '다양한 도구',
      image: '/engine/assets/3.png',
      description: (
        <>
          {isEnglish
            ? 'Provides useful features needed for 2D and 3D game development.'
            : '2D 및 3D 게임 개발에 필요한 유용한 기능들을 제공합니다.'
          }
        </>
      ),
    },
  ];
}

function Feature({ image, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  const { i18n } = useDocusaurusContext();
  const isEnglish = i18n.currentLocale === 'en';
  const FeatureList = getFeatureList(isEnglish);

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
