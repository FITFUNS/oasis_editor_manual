import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '쉬운 사용법',
    image: require('@site/static/img/OasisW.png').default,
    description: (
      <>
        OasisW는 처음부터 쉽게 설치하고 사용할 수 있도록 설계되었습니다.
        3D 웹 애플리케이션을 빠르게 구축할 수 있습니다.
      </>
    ),
  },
  {
    title: '완전한 3D 도구',
    image: require('@site/static/img/OasisW.png').default,
    description: (
      <>
        지면 작성, 머티리얼 적용, 물리운동, 스크립트 등 3D 개발에 필요한 모든 기능을
        제공합니다.
      </>
    ),
  },
];

function Feature({image, title, description}) {
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
