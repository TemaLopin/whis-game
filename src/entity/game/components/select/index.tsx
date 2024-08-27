import s from './style.module.scss'
import LoveIcon from './love-icon'
import { useContext } from 'react'
import { GameContext } from '../../../../pages/game'
import SelectLove from './select-love'
import clsx from 'clsx'
import AnswerIcon from './answer-icon'
import RemoveIcon from './remove-icon'

const SelectCharacteristic = ({ bg = '#fff', selectAsk = false, item }: any) => {
  const { answer, setAnswer, setSelects, categorySelect, setCategorySelect, setPosition, setIsVisible }: any =
    useContext(GameContext)

  const selectCharacteristicHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (selectAsk) return

    const offsetWidth = e.currentTarget.offsetWidth
    const x = e.clientX
    const y = e.clientY

    setPosition({ x, y, offsetWidth })
    setIsVisible(true)

    document.body.style.overflowY = 'hidden'
    const handleSelectAnswer = () => {
      setSelects((prev: any) =>
        prev.map((sel: any, ind: number, arr: any) => {
          const firstIndexAsk = arr.findIndex((sel: any) => sel.title == '?')
          return ind === firstIndexAsk ? item : sel
        })
      )
      setAnswer((prev: any) => [...prev, item])
      document.body.style.overflowY = 'auto'
    }

    const onPawSelect = () => {
      setIsVisible(false)
      setTimeout(handleSelectAnswer, 0)
    }

    setTimeout(onPawSelect, 2000)
  }

  const removeSelectHandler = () => {
    setSelects((prev: any) =>
      prev.map((sel: any) => (sel.title === item?.title ? { title: '?', category: item?.category } : sel))
    )

    setAnswer((prev: any) => prev.filter((ans: any) => ans.title !== item?.title))
    setCategorySelect(item?.category)
  }

  const checkAnswer = bg !== '#fff' && answer?.includes(item)
  const isAnswer = answer.some(({ category }: any) => category === item?.category)

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
