import { FC } from 'react'
import styles from "./index.module.scss" 

const INFO: FC = () => {  

    const fakeData = [
         { 
            id: 1, 
            title: "3000+", 
            des: "Pardalar va aksusuarlar"
         },
        { 
            id: 2,
            title: "16+", 
            des: "Yillik tajriba"
        }, 
        {
            id: 3,
            title: "3000+", 
            des: "Ranglar jilosi"
        }, 
        { 
            id: 4,
            title: "5000+", 
            des: "Mijozlar"
        }
    ] 

    return (
        <div className={styles.info}>
            <div className={styles.container}>
                {fakeData && fakeData.map(value => {
                    return (
                        <div className={styles.info_info} key={value.id}>
                            <h2 className={styles.info_title}>{value.title}</h2>
                            <p className={styles.info_des}>{value.des}</p>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default INFO;