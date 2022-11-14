import {FC} from 'react'
import styles from "./index.module.scss";

const CONTACT : FC = () => {
    return (
        <div className={styles.contact}>
            <div className={styles.container}>

                <div className={styles.contact_info}>
                    <h2 className={styles.contact_title} ><span className={styles.contact_title_custom} >GRAND SHTOR</span> saloni sizga 1000dan
                        ortiq parda va aksesuarlarni taklif qiladi </h2>
                </div>

                <div className={styles.contact_form}>
                    <h3 className={styles.contact_form_title}>MASTERLARIMIZDAN BEPUL MASLAHAT OLING !</h3>
                    <input className={styles.contact_form_input} type="text" placeholder="Ismingizni kiriting"/>
                    <input className={styles.contact_form_input} type="text" placeholder='Telefon raqamingizni kiriting'/>
                    <div className={styles.contact_form_btn}>BEPUL MASLAHAT</div>
                </div>
            </div>
        </div>
    )
}

export default CONTACT;