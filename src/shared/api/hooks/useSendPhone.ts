import { useMutation } from '@tanstack/react-query'
import { sendPhone } from '../endpoints'

const useSendPhone = () => {
  const { data, mutate, isPending } = useMutation({
    mutationKey: ['sendPhone'],
    mutationFn: sendPhone,
    onError: (error) => {
      console.error('Error sending phone number:', error)
    },
  })

  return { data, mutate, isLoading: isPending }
}

export default useSendPhone
