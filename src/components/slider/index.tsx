import { FC, Fragment } from 'react'
import styles from "./index.module.scss";
// commons 
import SIDEBAR from '../../commons/sidebar';
// slider
import Carousel from "nuka-carousel";
// image 
import HERO from "../../assets/images/hero.png";  

const SLIDER: FC = () => {

  const settings = {
    defaultControlsConfig: {
      pagingDotsClassName: styles.slider_dots,
      nextButtonClassName: styles.slider_next_btn,
      prevButtonClassName: styles.slider_prev_btn,
    }
  }

  return (
    <Fragment>
      <SIDEBAR bottom={50} />
      <div className={styles.slider} >
        <div className={styles.container} >

          <Carousel {...settings}>
            {[1, 2, 3].map(() => {
              return (
                <div className={styles.slider_inner}>

                  <div className={styles.slider_info}>
                    <h1 className={styles.slider_title} ><span className={styles.slider_high} >GRAND SHTOR</span> saloni sizga  1000  dan
                      ortiq parda va aksesuarlarni taklif qiladi </h1>
                    <p className={styles.slider_des} >O’zbekiston bozorlarida 15 yildan ortiq tajribaga ega bolgan salon
                      va bu salonda  oz ishing yetuk  mutaxasislari  Faolyat  olib boradi</p>
                    <div className={styles.slider_btn}>BUYURTMA BERING</div>
                  </div>

                  <div className={styles.slider_img} style={{backgroundImage: `url(${HERO})`}}>
                    {/* <img src=""/> */}
                  </div>

                </div>
              )
            })

            }
          </Carousel>

        </div>
      </div>
    </Fragment>

  )
}

export default SLIDER; 