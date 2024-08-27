import s from './style.module.scss'
import LoveIcon from './love-icon'
import { FC, useContext } from 'react'
import { GameContext } from '../../../../pages/game'
import SelectLove from './select-love'
import clsx from 'clsx'
import AnswerIcon from './answer-icon'
import RemoveIcon from './remove-icon'
import { isVisible } from '@testing-library/user-event/dist/utils'

type SelectCharacteristicProps = {
  bg?: string
  selectAsk?: boolean
  item: { title: string; category: number }
}

const SelectCharacteristic: FC<SelectCharacteristicProps> = ({ bg = '#fff', selectAsk = false, item }) => {
  const {
    answer,
    setAnswer,
    setSelects,
    categorySelect,
    setCategorySelect,
    setPosition,
    setIsVisible,
    isVisible,
    selects,
  } = useContext(GameContext)

  const selectCharacteristicHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (selectAsk || isVisible) return

    const offsetWidth = e.currentTarget.offsetWidth
    const x = e.clientX
    const y = e.clientY

    setPosition({ x, y, offsetWidth })
    setIsVisible(true)

    document.body.style.overflowY = 'hidden'

    const handleSelectAnswer = () => {
      const newSelects = selects.map((sel, ind: number, arr) => {
        const firstIndexAsk = arr.findIndex(({ title }) => title == '?')
        return ind === firstIndexAsk ? item : sel
      })

      setSelects(newSelects)
      setAnswer((prev) => [...prev, item])
      document.body.style.overflowY = 'auto'
    }

    const onPawSelect = () => {
      setIsVisible(false)
      setTimeout(handleSelectAnswer, 0)
    }

    setTimeout(onPawSelect, 2000)
  }

  const removeSelectHandler = () => {
    if (isVisible) return

    const newSelects = selects.map((sel) => {
      return sel.title === item?.title ? { title: '?', category: item?.category } : sel
    })
    setSelects(newSelects)

    const newAnswer = answer.filter((sel) => sel.category !== item?.category)
    setAnswer(newAnswer)

    setCategorySelect(item?.category)
  }

  const checkAnswer = bg !== '#fff' && answer?.includes(item)
  const isAnswer = answer.some(({ category }) => category === item?.category)

  return (
    <>
      {!checkAnswer && isAnswer ? (
        <div className={s.select_answer}>
          <AnswerIcon />
        </div>
      ) : (
        <button
          className={clsx({
            [s.select_item]: true,
            [s.select_item_none]: !checkAnswer,
            [s.select_item_toggle]: !selectAsk && item?.category === categorySelect,
            [s.select_item_active]: checkAnswer,
          })}
          onClick={selectCharacteristicHandler}
        >
          {checkAnswer && (
            <div className={s.remove_item} onClick={removeSelectHandler}>
              <RemoveIcon />
            </div>
          )}
          {checkAnswer ? <SelectLove /> : <LoveIcon color={bg} />}
          <p
            style={{ animationDelay: `${Math.random() * 1000}ms` }}
            className={clsx(bg !== '#fff' ? s.title : s.title_ask, item?.title === '?' && s.title_x)}
          >
            {item?.title}
          </p>
        </button>
      )}
    </>
  )
}

export default SelectCharacteristic
