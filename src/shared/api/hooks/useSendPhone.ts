import { useMutation } from 'react-query'
import { sendPhone } from '../endpoints'

const useSendPhone = () => {
  const { data, mutate, isLoading } = useMutation({
    mutationKey: 'sendPhone',
    mutationFn: sendPhone,
    onError: (error) => {
      console.error('Error sending phone number:', error)
    },
  })

  return { data, mutate, isLoading }
}

export default useSendPhone
