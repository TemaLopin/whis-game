import { http } from './instanse'

type GameAnswer = {
  activity: string
  socialization: string
  curiosity: string
  temperament: string
}

export const getSourceDonate = async () => {
  const { data } = await http.get<{ amount: number; date: string }>('/donations/current')
  return data
}

export const sendPhone = async (phoneNumber: string) => {
  const { data } = await http.post('/phone-numbers', { phoneNumber })
  return data
}

export const sendGameAnswer = async (answer: GameAnswer) => {
  const { data } = await http.post<{ question: string }>('/questions/current', answer)
  return data
}

export const sendUserCharacteristics = async (answer: GameAnswer) => {
  const { data } = await http.post('/characteristics', answer)
  return data
}
