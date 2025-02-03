import { z } from 'zod'

export const NewsApiResponseSchema = z.object({
  articles: z.array(
    z.object({
      author: z.string().nullable(),
      content: z.string(),
      description: z.string().nullable(),
      publishedAt: z.string(),
      source: z.object({
        id: z.string().nullable(),
        name: z.string(),
      }),
      title: z.string(),
      url: z.string(),
      urlToImage: z.string().nullable(),
    }),
  ),
  status: z.string(),
  totalResults: z.number(),
})

type NewsApiResponseType = z.infer<typeof NewsApiResponseSchema>

export type NewsArticleType = NewsApiResponseType['articles'][number]

export type NewsApiSortByType = 'publishedAt' | 'relevancy' | 'popularity'
