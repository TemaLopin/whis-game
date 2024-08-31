import { useQuery } from '@tanstack/react-query'
import { getAdviceRecommendations } from '../endpoints'

const useAdvice = ({ type, answers }: { answers: Record<string, number>; type: string }) => {
  const { data, refetch } = useQuery({
    queryKey: ['advice', answers],
    queryFn: async () => {
      const res = await getAdviceRecommendations(type, answers)

      return res
    },
  })

  return { data, refetch }
}

export default useAdvice
