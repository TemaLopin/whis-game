import { useMutation, useQueryClient } from '@tanstack/react-query'
import { sendGameAnswer } from '../endpoints'

const useSendGameAnswer = () => {
  const { data, mutate, isPending } = useMutation({
    mutationKey: ['sendGameAnswer'],
    mutationFn: sendGameAnswer,
    onSuccess: (data) => localStorage.setItem('pets', JSON.stringify(data)),
  })

  return { data, mutate, isPending }
}

export default useSendGameAnswer
