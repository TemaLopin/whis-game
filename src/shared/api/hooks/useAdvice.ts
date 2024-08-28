import { useQuery } from '@tanstack/react-query'
import { getAdviceRecommendations } from '../endpoints'

const useAdvice = ({ type }: { type: string }) => {
  const { data, refetch } = useQuery({
    queryKey: ['advice'],
    queryFn: async () => getAdviceRecommendations(type),
  })

  return { data, refetch }
}

export default useAdvice
