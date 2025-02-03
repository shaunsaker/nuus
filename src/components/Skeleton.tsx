import { View, ViewProps } from 'react-native'
import { twMerge } from 'tailwind-merge'

type Props = ViewProps & {
  className?: string
}

export const Skeleton = ({ className, ...props }: Props) => {
  return <View className={twMerge('w-full h-8 bg-base-200 animate-pulse rounded-lg', className)} {...props} />
}
