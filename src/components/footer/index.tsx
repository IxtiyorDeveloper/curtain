import { FC, Fragment } from 'react'
import styles from "./index.module.scss";
// commmons 
import SOCIAL from '../../commons/social';

const FOOTER: FC = () => {
  return (
    <Fragment>
      <div className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footer_contact} >  
          
            <div className={styles.footer_contact_first}> 
              <h2 className={styles.footer_title}>bizning manzil</h2>
              <p className={styles.footer_des} >toshkent shahri olmazor</p>
              <p className={styles.footer_des} >tumani o'ratepa mahallasi</p>
              <p className={styles.footer_des} >nurafshon ko'chasi 41a uy</p>
            </div>

            <div className={styles.footer_contact_second}>
              <h2 className={styles.footer_title} >murojat uchun</h2>
              <p className={styles.footer_des}>+998 99 655 55 50</p>
              <p className={styles.footer_des}>+998 99 150 50 55</p>
              <p className={styles.footer_des}>+998 99 664 55 50</p>
            </div>
          </div>
          
          <div className={styles.footer_map} >

          </div>
        </div>
      </div>

      <SOCIAL color='#FF0000' />
    </Fragment>
  )
}

export default FOOTER; 