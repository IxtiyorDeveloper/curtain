import { FC } from 'react'
import styles from "./index.module.scss";
// slider import 
import Carousel from 'nuka-carousel';

const CHOOSECARD: FC = () => {

  const show = (): any => {
    const n = window.innerWidth;

    let k;

    if (n > 1200) {
      k = 4;
      return k;
    }

    if (n > 992 && n <= 1200) {
      k = 3;
      return k;
    }

    if (n > 768 && n <= 992) {
      k = 3;
      return k;
    }

    if (n > 576 && n <= 768) {
      k = 2;
      return k;
    }

    if (n < 576) {
      k = 1;
      return k;
    }
  }

  const data = [
    {
      id: 1,
      width: 3,
      height: 2.5,
      image: "/assets/images/1p1.png",
    },
    {
      id: 2,
      width: 3,
      height: 2.5,
      image: "/assets/images/2p1.png"
    },
    {
      id: 3,
      width: 3,
      height: 2.5,
      image: "/assets/images/1p1.png"
    },
    {
      id: 4,
      width: 3,
      height: 2.5,
      image: "/assets/images/2p1.png"
    },
  ]

  const settings: any = {
    slidesToShow: show(),
    slidesToScroll: 1,
    wrapAround: false,
    defaultControlsConfig: {
      pagingDotsClassName: styles.dot,
      nextButtonClassName: styles.next_btn,
      prevButtonClassName: styles.prev_btn
    },
    speed: 500,
    fade: true,
    rows: 1,
  }

  return (
    <div className={styles.choose}>
      <div className={styles.container}>
        <Carousel {...settings}>
          {data && data.map(value => {
            return (
              <div className={styles.choose_img_container} onClick={(event: React.MouseEvent<HTMLElement>) => {localStorage.setItem('card', value.id.toString()), window.location.reload()}}>
                <img src={value.image} className={styles.choose_img_self} />
              </div>
            )
          })
          }
        </Carousel>
      </div>
    </div>
  )
}

export default CHOOSECARD; 