import { useMutation } from '@tanstack/react-query'

import { fetchNews } from '../api/fetchNews'

export const useNews = () => {
  return useMutation({ mutationFn: fetchNews })
}
