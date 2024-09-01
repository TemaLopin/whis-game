import clsx from 'clsx'
import s from './style.module.scss'
import { Collapse } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { questionAnswer } from './constants'
import ym from 'react-yandex-metrika'
import { InView } from 'react-intersection-observer'

let initialQuantityLength = 4

type QuestionAnswerT = {
  question: string
  description: {
    title: string
    description: string
  }[]
}[]

const QuestionAnswer = () => {
  const [data, setData] = useState<QuestionAnswerT>([])
  const [openId, setOpenId] = useState(0)
  const [showMore, setShowMore] = useState(true)

  const handleSelect = (id: number) => {
    ym('reachGoal', 'main_faqOpenClose_click', {
      main: { faqOpenClose: { click: openId === id ? 'Закрыть' : 'Открыть' } },
    })
    setOpenId(openId === id ? -1 : id)
  }

  const showMoreHandler = () => {
    const currentLength = data.length
    const allQuestionLength = questionAnswer.length

    const isShowMore = allQuestionLength - currentLength > 0
    const newLength = isShowMore ? currentLength + initialQuantityLength : initialQuantityLength

    const newData = questionAnswer.slice(0, newLength)

    setData(newData)
    setShowMore(newLength <= allQuestionLength)

    ym('reachGoal', 'main_faqMore_click', { main: { faqMore: { click: 'Показать еще' } } })
  }

  const handleView = () => {
    ym('reachGoal', 'main_faq_view', { main: { faq: { view: 'Вопрос-ответ' } } })
  }

  useEffect(() => showMoreHandler(), [])

  if (data.length === 0) return <></>

  return (
    <InView triggerOnce onChange={(isView) => isView && handleView()} className={s.echo}>
      <div data-animch='1' className={clsx('container', s.body)}>
        <p className={s.main_text}>вопрос-ответ</p>
        <p className={s.sub_text}>Ответы на часто задаваемые вопросы</p>
        {data.map(({ question, description }, id) => (
          <div className={s.questions} key={id}>
            <div
              className={s.qa_title}
              aria-controls='q_a'
              aria-expanded={openId === id}
              onClick={() => handleSelect(id)}
            >
              <p className={s.title}>{question}</p>
              <p className={s.plus}>{openId === id ? '-' : '+'}</p>
            </div>
            <Collapse className={s.collapse} in={openId === id}>
              <div id={`q_a-${id}`}>
                {description.map(({ title, description }, d_key) => (
                  <div key={d_key} className={s.q_a_section}>
                    <p className={s.article}>{title}</p>
                    <p dangerouslySetInnerHTML={{ __html: description }} className={s.answer}></p>
                  </div>
                ))}
              </div>
            </Collapse>
          </div>
        ))}
        <button className={clsx(s.show_more, !showMore && s.active)} onClick={showMoreHandler}>
          {showMore ? 'Показать еще' : 'Скрыть'}
        </button>
      </div>
    </InView>
  )
}

export default QuestionAnswer
