import { Fragment } from 'react'
import styles from "./index.module.scss";
// images 
import CATEGORY from "/assets/images/category.png";
// commons 
import SIDEBAR from '../../commons/sidebar';

interface props {
    id?: number,
    width?: number,
    height?: number,
    name?: string,
}

// export enum Operators {
//     check = false
// }

const CARD = (props: props) => {

    const data = [
        {
            id: 1,
            width: 3,
            height: 2.5,
            image: "/assets/images/1p1.png",
        },
        {
            id: 2,
            width: 4,
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

    const id = localStorage.getItem('card');

    const initialData = data.filter(value => value.id.toString() === id);

    return (
        <Fragment>
            {initialData && initialData.map(value => {
                return (
                    <div style={{ background: `url(${CATEGORY})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }} key={value.id}>
                        <SIDEBAR bottom={0} />

                        <div className={styles.card_container}>
                            <div className={styles.container}>
                                <div className={styles.card_div}>

                                </div>

                                <div className={styles.card_info}>
                                    <h3 className={styles.card_title}>toshkent </h3>
                                    <p className={styles.card_des}>{value.width}x {value.height}metrli  </p>
                                    <div className={styles.card_btn}>Buyurtma berish</div>
                                </div>

                            </div>
                        </div>

                    </div>
                )
            })

            }
        </Fragment>
    )
}

export default CARD; 