import '../../global.css'

import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import { AppProvider } from '@/components/AppProvider'

export default function RootLayout() {
  return (
    <AppProvider>
      <StatusBar style="dark" />

      <Stack screenOptions={{ headerShown: false }} />
    </AppProvider>
  )
}
