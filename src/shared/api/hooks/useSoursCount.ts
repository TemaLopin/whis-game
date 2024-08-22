import { useQuery } from 'react-query'
import { getSourceDonate } from '../endpoints'

const initialValue = {
  amount: 0,
  date: '',
}

const useSoursCount = () => {
  const { data = initialValue, isLoading } = useQuery({
    queryKey: ['soursCount'],
    queryFn: getSourceDonate,
  })

  return { data, isLoading }
}

export default useSoursCount
