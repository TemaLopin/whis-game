import { useMutation } from '@tanstack/react-query'
import { sendGameAnswer } from '../endpoints'

const useSendGameAnswer = () => {
  const { data, mutate, isPending } = useMutation({
    mutationKey: ['sendGameAnswer'],
    mutationFn: sendGameAnswer,
  })

  return { data, mutate, isPending }
}

export default useSendGameAnswer
