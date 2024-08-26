import s from './style.module.scss'
import LoveIcon from './love-icon'
import {useContext} from 'react'
import {GameContext} from '../../../../pages/game'
import SelectLove from './select-love'
import clsx from 'clsx'
import AnswerIcon from './answer-icon'
import RemoveIcon from './remove-icon'

const SelectCharacteristic = ({ bg = '#fff', selectAsk = false, item }: any) => {
  const { answer, setAnswer, setSelects, categorySelect, setCategorySelect }: any = useContext(GameContext)

    const selectCharacteristicHandler = () => {
        setSelects((prev: any) =>
            prev.map((sel: any, ind: number, arr: any) => {
                const firstIndexAsk = arr.findIndex((sel: any) => sel.title == '?')
                if (ind === firstIndexAsk) {
                    return item
                }
                return sel
            })
        )
        setAnswer((prev: any) => [...prev, item])
    }

    const removeSelectHandler = () => {
        setSelects((prev: any) =>
            prev.map((sel: any) => {
                if (sel.title === item?.title) {
                    return {title: '?', category: item?.category}
                }
                return sel
            })
        )

        setAnswer((prev: any) => prev.filter((ans: any) => ans.title !== item?.title))
        setCategorySelect(item?.category)
    }

    const checkAnswer = bg !== '#fff' && answer?.includes(item)

    const isAnswer = answer.some(({category}: any) => category === item?.category)

    return (
        <>
            {!checkAnswer && isAnswer ? (
                <div className={s.select_answer}>
                    <AnswerIcon/>
                </div>
            ) : (
                <button
                    className={clsx(
                        s.select_item,

                        !checkAnswer && s.select_item_none,

                        !selectAsk && item?.category === categorySelect && s.select_item_toggle,

            checkAnswer && s.select_item_active
          )}
          onClick={!selectAsk ? selectCharacteristicHandler : undefined}
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
