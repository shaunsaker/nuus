import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider as QueryClientProviderPrimitive,
} from '@tanstack/react-query'
import React, { ReactNode } from 'react'
import { Alert } from 'react-native'

const handleError = (error: unknown) => {
  console.error(error)

  Alert.alert('Error', (error as Error).message)

  // TODO: Send error to error logging service
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
  queryCache: new QueryCache({
    // Enables global error handling for data queries
    onError(error) {
      handleError(error)
    },
  }),
  mutationCache: new MutationCache({
    // Enables global error handling for data mutations
    onError(error) {
      handleError(error)
    },
  }),
})

type Props = { children: ReactNode }

export const QueryClientProvider = ({ children }: Props) => {
  return <QueryClientProviderPrimitive client={queryClient}>{children}</QueryClientProviderPrimitive>
}
