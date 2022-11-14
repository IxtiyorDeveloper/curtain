import { Fragment, useState } from 'react'
import styles from "./index.module.scss";
import MAINLOGO from "../../assets/logos/mainlogo.png";
import MAINTEXT from "../../assets/logos/textlogo.png";
import PHONELOGO from "../../assets/logos/phonelogo.png";
// router
import { Link } from "react-router-dom";

interface props {
    bottom: number,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

const SIDEBAR = (props: props) => {
    const { bottom } = props;
    const [open, setOpen] = useState<boolean>(false);

    const onSubmit = (): void => {
        setOpen(!open);
    }

    return (
        <Fragment>

            <div className={styles.sidebar} style={{ marginBottom: `${bottom}px` }}>
                <div className={styles.container} >
                    <div className={styles.sidebar_logo_side} >
                        <img src={MAINLOGO} />
                        <img src={MAINTEXT} />
                    </div>

                    <div className={styles.sidebar_menu_side} >

                        <ul className={styles.sidebar_links} >
                            <Link to="/" className={styles.sidebar_links_element}>Bosh sahifa</Link>
                            <Link to="/category" className={styles.sidebar_links_element}>Barcha turdagi </Link>
                        </ul>

                        <div className={styles.sidebar_info}>

                            <div className={styles.sidebar_phone}>
                                <img className={styles.sidebar_phone_img} src={PHONELOGO} />
                                <p className={styles.sidebar_phone_num}>(99)655-55-50</p>
                            </div>

                            <div className={styles.sidebar_lan}>
                                <select className={styles.sidebar_lan_title}>
                                    <option className={styles.option} value="UZ">UZ</option>
                                    <option className={styles.option} value="RU">RU</option>
                                    <option className={styles.option} value="EN">EN</option>
                                </select>
                                {/* <img src={DOWNLOGO} /> */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.sidebar_adapt} style={{ marginBottom: `${bottom}px` }}>

                <div className={styles.sidebar_adapt_main} >
                    <div className={styles.container}>
                        <div className={styles.sidebar_logo_side} >
                            <img className={styles.sidebar_mainlogo} src={MAINLOGO} />
                            <img className={styles.sidebar_maintext} src={MAINTEXT} />
                        </div>

                        <div onClick={onSubmit} className={styles.sidebar_burger}>

                        </div>
                    </div>
                </div>

                {open ? <div className={styles.justline}>
                    <div className={styles.sidebar_container}>
                        <ul className={styles.sidebar_links}>
                            <Link to="/" className={styles.sidebar_links_element}>Bosh sahifa</Link>
                            <Link to="/category" className={styles.sidebar_links_element}>Barcha turdagi </Link>
                        </ul>

                        <div className={styles.sidebar_lan}>
                            <div className={styles.sidebar_lan_bar}>en</div>
                            <div className={styles.sidebar_lan_bar}>ru</div>
                            <div className={styles.sidebar_lan_bar}>uz</div>
                        </div>

                    </div>
                </div> : null}

            </div>

        </Fragment>
    )
}

export default SIDEBAR;

