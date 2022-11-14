import { FC, Fragment } from 'react'
// COMPONENTS
// import SIDEBAR from '../../commons/sidebar';
import SLIDER from '../../components/slider';
import INFO from "../../components/info";
import PRODUCTS from '../../components/products';
import CONTACT from "../../components/contact";
import ABOUTUS from '../../components/aboutus';
import LATEST from '../../components/latest';
import CLIENTS from '../../components/clients';
import QUESTIONS from '../../components/questions';
import FOOTER from '../../components/footer';
// STYLES
import styles from "./index.module.scss";
import IMG from "../../assets/images/hero_back.png";  

const HOME: FC = () => {
  return (
    <Fragment>
      <div className={styles.home_hero} style={{background: `url(${IMG})`}}>
        <SLIDER />
      </div>
      <INFO />
      <PRODUCTS />
      <CONTACT />
      <ABOUTUS />
      <LATEST />
      <CLIENTS />
      <QUESTIONS />
      <FOOTER />
    </Fragment>
  )
}

export default HOME; 