import { Text, TextProps } from 'react-native'
import { twMerge } from 'tailwind-merge'

type Props = TextProps

export const HeadingText = ({ className, children, ...props }: Props) => {
  return (
    <Text className={twMerge('text-neutral font-bold text-lg', className)} {...props}>
      {children}
    </Text>
  )
}
