import { FC } from 'react'
import styles from "./index.module.scss";
// commons
import TITLE from '../../commons/title';
// image
import MAN from "../../assets/images/man.png";
// icons
import DOWNLOGO from "../../assets/logos/downlogo.png";

const QUESTIONS: FC = () => {
  const data = [
    {
      id: 1,
      question: "Zakaz bersak qancha muddatta tayyor bo’ladi?",
    },
    {
      id: 2,
      question: "Pardalarni qayerdan olasizlar ?"
    },
    {
      id: 3,
      question: "Boshqa salondan nima farqila va ustunlik jihatilar bor ?",
    },
    {
      id: 4,
      question: "O’lchash va o’rnatish narxi qancha ?",
    },
    {
      id: 5,
      question: "Chegirmalar yoki bo’lib tolasa bo’ladimi ?",
    },
    {
      id: 6,
      question: "Qaysi hududlarda xizmat ko’rsatasizlar ?"
    },
    {
      id: 7,
      question: "Yetkazib berish xizmatilar bormi ?",
    },
    {
      id: 8,
      question: "Qanday to’lo’v xizmatlari mavjud ?"
    }
  ]

  return (
    <div className={styles.questions}>
      <div className={styles.container}>
        <TITLE title='KO’P SO’RALADIGAN SAVOLAR' />

        <div className={styles.questions_div}>
          {data.map(value => {
            return (
              <div className={styles.question_tag_overall} key={value.id}>
                <div className={styles.questions_tag}>
                  {value.question}
                  <img src={DOWNLOGO} />
                </div>

                <div className={styles.questiomn_tag_answer} >

                </div>

              </div>
            )
          })

          }
        </div>

        {/* <img className={styles.questions_img} src={MAN} /> */}
      </div>
    </div>
  )
}

export default QUESTIONS; 