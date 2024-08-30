import s from './style.module.scss'
import LoveIcon from './love-icon'
import { FC, useContext } from 'react'
import { GameContext } from '../../../../pages/game'
import SelectLove from './select-love'
import clsx from 'clsx'
import AnswerIcon from './answer-icon'
import RemoveIcon from './remove-icon'

type Data = {
  title: string
  category: number
  key?: string
  level?: string
  visible?: boolean
}

type SelectCharacteristicProps = {
  bg?: string
  selectAsk?: boolean
  item: Data
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
    setAnswersData,
  } = useContext(GameContext)

  const selectCharacteristicHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (selectAsk || isVisible) return

    const button = e.currentTarget
    const buttonRect = button.getBoundingClientRect()

    const centerX = buttonRect.left + buttonRect.width / 2
    const centerY = buttonRect.top + buttonRect.height / 2

    const offsetWidth = e.currentTarget.offsetWidth

    const x = centerX
    const y = centerY

    setPosition({ x, y, offsetWidth })
    setIsVisible(true)

    document.body.style.overflowY = 'hidden'

    const handleSelectAnswer = () => {
      const newSelects = selects.map((sel, ind: number, arr) => {
        const firstIndexAsk = arr.findIndex(({ title }) => title === '?')
        return ind === firstIndexAsk ? item : sel
      })

      setSelects(newSelects)
      setAnswer((prev) => [...prev, item])

      document.body.style.overflowY = 'auto'

      setAnswersData((prev) =>
        prev.map((p_item) => {
          if (p_item.category === item.category) return { ...p_item, visible: false }
          return p_item
        })
      )
    }

    const onPawSelect = () => {
      setIsVisible(false)
      handleSelectAnswer()
    }

    setTimeout(onPawSelect, 1000)
  }

  const removeSelectHandler = () => {
    if (isVisible) return

    const newSelects = selects.map((sel) => {
      return sel.title === item?.title ? { title: '?', category: item?.category } : sel
    })
    setSelects(newSelects)

    const newAnswer = answer.filter((sel) => sel.category !== item?.category)
    setAnswer(newAnswer)

    setAnswersData((prev) =>
      prev.map((p_item) => {
        if (p_item.category === item.category) return { ...p_item, visible: true }
        return p_item
      })
    )

    setCategorySelect(item?.category)
  }

  const checkAnswer = bg !== '#fff' && answer?.includes(item)

  return item.visible === undefined || item.visible ? (
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
  ) : (
    <div className={s.select_answer}>
      <AnswerIcon />
    </div>
  )
}

export default SelectCharacteristic
