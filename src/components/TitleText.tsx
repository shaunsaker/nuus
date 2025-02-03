import { Text, TextProps } from 'react-native'
import { twMerge } from 'tailwind-merge'

type Props = TextProps

export const TitleText = ({ className, children, ...props }: Props) => {
  return (
    <Text className={twMerge('text-neutral font-bold text-2xl', className)} {...props}>
      {children}
    </Text>
  )
}
