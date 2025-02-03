import { Text, View } from 'react-native'

import { TitleText } from './TitleText'

export const Logo = () => {
  return (
    <View className="flex-row gap-4 items-center">
      <View className="w-12 h-12 rounded-full bg-primary flex flex-col items-center justify-center">
        <Text className="text-3xl font-bold">🗞️</Text>
      </View>

      <TitleText>Nuus</TitleText>
    </View>
  )
}
