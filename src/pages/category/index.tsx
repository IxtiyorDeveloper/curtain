import {FC, Fragment} from 'react'
import styles from "./index.module.scss"; 
// components 
import CARD from '../../components/card'; 
import CHOOSECARD from '../../components/choosecard'; 

const CATEGORY : FC = () => {
  return (
    <Fragment>
        <CARD />
        <CHOOSECARD />
    </Fragment>
  )
}

export default CATEGORY; 