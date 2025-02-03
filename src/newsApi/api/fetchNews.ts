import axios from 'axios'

import { NewsApiResponseSchema, NewsApiSortByType } from '../types'

const API_KEY = process.env.EXPO_PUBLIC_NEWS_API_KEY
const BASE_URL = 'https://newsapi.org/v2/everything'

export const fetchNews = async ({
  query,
  sources,
  domains,
  from,
  to,
  language,
  sortBy = 'publishedAt',
  page,
  pageSize = 100,
}: {
  query: string
  sources?: string
  domains?: string
  from?: string
  to?: string
  language?: string
  sortBy?: NewsApiSortByType
  page?: number
  pageSize?: number
}) => {
  const response = await axios.get(BASE_URL, {
    params: {
      q: query,
      sources,
      domains,
      from,
      to,
      language,
      sortBy,
      page,
      pageSize,
      apiKey: API_KEY,
    },
  })

  const data = response.data

  const parsedData = NewsApiResponseSchema.safeParse(data)

  if (parsedData.error) {
    throw parsedData.error
  }

  return parsedData
}
