import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '쉬운 사용법',
    image: '/engine/assets/open-book.png',
    description: (
      <>
        OasisW는 처음부터 쉽게 사용할 수 있도록 설계되었습니다.
        프로그램을 설치하지 않아도 인터넷만 있으면 
        바로 재미있는 작품을 만들 수 있어요.
      </>
    ),
  },
  // {
  //   title: '코딩은 AI',
  //   image: '/engine/assets/fitfuns-logo1.svg',
  //   description: (
  //     <>
  //       글로 설명하면 AI가 콘텐츠를 만들어 줘요.
  //       원하는 게임을 글로 설명하면 AI가 코딩을 도와주고, 멋진 3D 모델과 움직임까지 쉽게
  //       만들어 줘요!
  //     </>
  //   ),
  // },
  {
    title: '다양한 3D 도구',
    image: '/engine/assets/3d-cube.png',
    description: (
      <>
        지면 작성, 머티리얼 적용, 물리운동, 스크립트 등 3D 개발에 필요한 모든 기능을 제공합니다.
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--6')}>
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
