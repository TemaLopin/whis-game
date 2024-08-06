import clsx from 'clsx'
import s from './style.module.scss'
import { Collapse } from 'react-bootstrap'
import {useRef, useState} from 'react'

const QuestionAnswer = () => {
  let initialQuantity = 4;
  const [openId, setOpenId] = useState(0)
  const [quaShow, setQuaShow] = useState(initialQuantity)
  const refBtn = useRef<HTMLButtonElement>(null);
  const handleSelect = (id: number) => {
    setOpenId(openId === id ? -1 : id)
  }

  const showMoreHandler = (length: number) => {
    if(refBtn.current){
      refBtn.current.textContent = length > quaShow ? 'Скрыть' : 'Показать еще'
      setQuaShow(length > quaShow ? length : initialQuantity);
      refBtn.current.classList.toggle(s.active)
    }

  }

  return (
    <div className={s.echo}>
      <div className={clsx('container', s.body)}>
        <p className={s.main_text}>вопрос-ответ</p>
        <p className={s.sub_text}>Ответы на часто задаваемые вопросы</p>
        {new Array(5).fill(false).map((q_a, id) => (
            id < quaShow && <div className={s.questions} key={id}>
            <div
              className={s.qa_title}
              aria-controls='q_a'
              aria-expanded={openId === id}
              onClick={() => handleSelect(id)}
            >
              <p className={s.title}>Территория проведения Акции? </p>
              <p className={s.plus}>+</p>
            </div>
            <Collapse in={openId === id}>
              <div id={`q_a-${id}`}>
                <div className={s.q_a_section}>
                  <p className={s.article}> «Забота сближает. 1 рубль с пачки — в приюты»</p>
                  <p className={s.answer}>
                    Акция проводится на территории субъектов Российской Федерации, полный список которых приведен в
                    Правилах акции.
                  </p>
                </div>
                <div>
                  <p className={s.article}> «Забота сближает»</p>
                  <p className={s.answer}>
                    Акция проводится на территории субъектов Российской Федерации, полный список которых приведен в
                    Правилах акции.
                  </p>
                </div>
              </div>
            </Collapse>
          </div>
        ))}
        <button className={s.show_more} ref={refBtn} onClick={() => showMoreHandler(5)}>Показать еще </button>
      </div>
    </div>
  )
}

export default QuestionAnswer
