import { http } from './instanse'

export const getSourceDonate = async () => {
  const { data } = await http.get<{ amount: number; date: string }>('/donations/current')
  return data
}

export const sendPhone = async (phoneNumber: string) => {
  const { data } = await http.post('/phone-numbers', { phoneNumber })
  return data
}
