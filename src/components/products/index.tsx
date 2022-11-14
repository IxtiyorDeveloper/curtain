import { FC } from 'react'
import styles from "./index.module.scss";
// commons
import TITLE from '../../commons/title';

interface typeInt {
    id: number,
    name: string
}

const PRODUCTS: FC = () => {
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
            name: "xonalar boyicha"
        },
        {
            id: 2,
            name: "turlari boyicha"
        },
        {
            id: 3,
            name: "aksesuarlar"
        },
    ]

    return (
        <div className={styles.products}>
            <div className={styles.container}>
                <div className={styles.products_overall} >
                    <TITLE title='Maxsulotlarimiz' />
                    <div className={styles.products_container_choice}>

                        <div className={styles.products_container_btns}>
                            {types && types.map(value => {
                                return (
                                    <div className={styles.products_btns} >{value.name}</div>
                                )
                            })

                            }
                        </div>

                        <div className={styles.products_container_category}>
                            {products && products.map(value => {
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

export default PRODUCTS;