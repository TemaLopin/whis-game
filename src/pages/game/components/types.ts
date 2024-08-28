import { Dispatch, SetStateAction } from 'react'
import { SendAnswerGameRes } from '../../../shared/api/endpoints'

export type Answer = {
  title: string
  category: number
}

export type AnswerData = {
  title: string
  category: number
  key?: string
  level?: string
  visible?: boolean
}

export type PetInfo = SendAnswerGameRes & { id: number; name: string; image: string; tags: string[] }

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
  answersData: AnswerData[]
  setAnswersData: Dispatch<SetStateAction<AnswerData[]>>
}
