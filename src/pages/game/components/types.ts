import { Dispatch } from 'react'

export type Answer = {
  title: string
  category: number
}

export type GameContextT = {
  setAnswer: Dispatch<React.SetStateAction<Answer[]>>
  answer: Answer[]
  selects: Answer[]
  setSelects: Dispatch<React.SetStateAction<Answer[]>>
  indSelect: number
  setIndSelect: Dispatch<React.SetStateAction<number>>
  categorySelect: number
  setCategorySelect: Dispatch<React.SetStateAction<number>>
  position: { x: number; y: number; offsetWidth: number }
  setPosition: Dispatch<React.SetStateAction<{ x: number; y: number; offsetWidth: number }>>
  isVisible: boolean
  setIsVisible: Dispatch<React.SetStateAction<boolean>>
}
