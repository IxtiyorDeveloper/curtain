import { FC } from 'react'
import styles from "./index.module.scss";
import FACEBOOK from "../../assets/logos/facebooklogo.png";
import INSTAGRAM from "../../assets/logos/instagramlogo.png";
import TELEGRAM from "../../assets/logos/telegramlogo.png";

interface props {
    color: string,
}

const SOCIAL = (props: props) => {
    const { color } = props;

    return (
        <div className={styles.social} style={{ background: color }}>
            <div className={styles.container} >
                <h2 className={styles.social_title}>BIZNI ISHTIMOYI TARMOQLARDA HAM KUZATISHINGIZ MUMKIN</h2>

                <div className={styles.social_info_elements}>
                    <div className={styles.social_info_elements_div} ><img className={styles.social_info_img} src={FACEBOOK} /><p className={styles.social_info_name} >FACEBOOK</p></div>
                    <div className={styles.social_info_elements_div} ><img className={styles.social_info_img} src={INSTAGRAM} /><p className={styles.social_info_name} >INSTAGRAM</p></div>
                    <div className={styles.social_info_elements_div} ><img className={styles.social_info_img} src={TELEGRAM} /><p className={styles.social_info_name} >TELEGRAM</p></div>
                </div>
            </div>
        </div>
    )
}

export default SOCIAL