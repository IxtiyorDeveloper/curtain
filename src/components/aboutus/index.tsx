import { FC, Fragment } from 'react'
import styles from "./index.module.scss";
// commons 
import SOCIAL from '../../commons/social';
// icons
import YOUTUBE from "../../assets/logos/youtube.png"
const ABOUTUS: FC = () => {
    return (
        <Fragment>
            <SOCIAL color={'#252525'} />
            <div className={styles.aboutus} >
                <div className={styles.container} >

                    <div className={styles.aboutus_about_elements}>

                        <h2 className={styles.aboutus_title}>Biz xaqimizda</h2>
                        <p className={styles.aboutus_des}><span className={styles.aboutus_des_custom} >GRAND SHTOR</span> saloniga kelib o’zingizga
                            kerakli bolgan pardani tanlaganizdan
                            songra uyingizga sifatli va alo darajada
                            yetkazib ornatib beramiz</p>

                        <div className={styles.aboutus_btn_div} >
                            <div className={styles.aboutus_about_btn}>KATALOG</div>
                            <div className={styles.aboutus_about_btn}>BEPUL MASLAXAT</div>
                        </div>

                    </div>
                    <div className={styles.aboutus_about_img}>
                        <img className={styles.aboutus_img_anim} src={YOUTUBE} />
                        <div className={styles.aboutus_circle} id={styles.first} ></div>
                        <div className={styles.aboutus_circle} id={styles.second} ></div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ABOUTUS