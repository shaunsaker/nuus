import React, { ReactNode } from 'react'

import { QueryClientProvider } from '@/components/QueryClientProvider'

type Props = { children: ReactNode }

export const AppProvider = ({ children }: Props) => {
  return <QueryClientProvider>{children}</QueryClientProvider>
}
