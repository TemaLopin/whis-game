import { http } from './instanse'

type GameAnswer = { [key: string]: string }

export type SendAnswerGameRes = {
  _id: string
  type: string
  activity: string
  socialization: string
  curiosity: string
  temperament: string
  gender: string
  nickname: string
  phone: string
  email: string
  photo: string
  profileLink: string
  tagsPreview: string
  tagsDetailed: string
  __v: number
}
export type AdviceRecommendationRes = {
  _id: string
  photo: string
  bgImg: string
  description: string
  property: number
  frailty: number
  type: string
}[]

export const getSourceDonate = async () => {
  const { data } = await http.get<{ amount: number; date: string }>('/donations/current')
  return data
}

export const sendPhone = async (phoneNumber: string) => {
  const { data } = await http.post('/phone-numbers', { phoneNumber })
  return data
}

export const sendGameAnswer = async (answer: GameAnswer) => {
  const { data } = await http.post<SendAnswerGameRes[]>('/match-pets', answer)
  return data
}

export const sendUserCharacteristics = async (answer: GameAnswer) => {
  const { data } = await http.post('/characteristics', answer)
  return data
}

export const getAdviceRecommendations = async (type: string) => {
  const { data } = await http.get<AdviceRecommendationRes>(`/random-tips?type=${type}`)
  return data
}
