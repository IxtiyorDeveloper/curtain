import { FC } from 'react'
import styles from "./index.module.scss";
// images
import SECONDLOGO from "../../assets/logos/secondlogo.png";
// commons
import TITLE from '../../commons/title';
// carousel
import Carousel from 'nuka-carousel';

const CLIENTS: FC = () => {

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

    const settings: any = {
        slidesToShow: show(),
        slidesToScroll: 1,
        wrapAround: false,
        defaultControlsConfig: {
            pagingDotsClassName: styles.dot,
            // nextButtonText: <GrFormNext/>, 
            // prevButtonText: <GrFormPrevious/>,  
            nextButtonClassName: styles.next_btn,
            prevButtonClassName: styles.prev_btn
        },
        speed: 500,
        fade: true,
        rows: 1,
    }

    return (
        <div className={styles.clients}>
            <div className={styles.container}>
                <TITLE title={'Mijozlarimiz biz haqimizda'} />
                <Carousel {...settings} className={styles.clients_card}>

                    {[1, 2, 3, 4].map(() => {
                        return (
                            <div className={styles.clients_card_div}>
                                <img src={SECONDLOGO} />
                            </div>
                        )
                    })
                    }

                </Carousel>
                <p className={styles.products_btn}>Barchasi</p>
            </div>
        </div>
    )
}

export default CLIENTS; 