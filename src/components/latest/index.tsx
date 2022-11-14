import { FC } from 'react'
import styles from "./index.module.scss";
import BACKIMG from "../../assets/images/hero_back.png";
// commons
import TITLE from '../../commons/title'; 

const LATEST: FC = () => {  
    const products = [
        {
            id: 1,
            name: 'Oshxona',
            image: "/assets/images/1p.png",
        },
        {
            id: 2,
            name: 'Zal',
            image: "/assets/images/2p.png",
        },
        {
            id: 3,
            name: 'Yotoqxona',
            image: "/assets/images/3p.png",
        },
        {
            id: 4,
            name: 'Bolalar honasi',
            image: "/assets/images/4p.png",
        }
    ] 

    const types = [
        {
            id: 1, 
            name: 'so’ngi qilingan ishlar'
        }, 
        {
            id: 2, 
            name: "omma bop pardalar"
        }
    ] 

    return (
        <div className={styles.products}>
            <div className={styles.container}>
                <div className={styles.products_overall} >
                    <TITLE title='Maxsulotlarimiz'/>
                    <div className={styles.products_container_choice}>

                        <div className={styles.products_container_btns}>
                            {types && types.map(value => {
                                return (
                                    <div className={styles.products_btns} key={value.id}>{value.name}</div>
                                )
                            })

                            }
                        </div>

                        <div className={styles.products_container_category}>
                            {products.map(value => {
                                return (
                                    <div className={styles.products_card} key={value.id}>
                                        <img className={styles.products_card_img} src={value.image} />
                                        <p className={styles.products_card_title}>{value.name}</p>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                </div> 
                
                <p className={styles.products_btn}>Barchasi</p>
            </div>
        </div>
    )
}

export default LATEST;