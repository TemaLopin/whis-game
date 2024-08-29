import { useQuery } from '@tanstack/react-query'
import { getAdviceRecommendations } from '../endpoints'

const useAdvice = ({ type }: { type: string }) => {
  const { data, refetch } = useQuery({
    queryKey: ['advice'],
    queryFn: async () => {
      const answers = JSON.parse(localStorage.getItem('answers') || '{}')

      const res = await getAdviceRecommendations(type, answers)

      return res
    },
  })

  return { data, refetch }
}

export default useAdvice
