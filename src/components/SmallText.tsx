import { Text, TextProps } from 'react-native'
import { twMerge } from 'tailwind-merge'

type Props = TextProps

export const SmallText = ({ className, children, ...props }: Props) => {
  return (
    <Text className={twMerge('text-neutral font-medium text-sm', className)} {...props}>
      {children}
    </Text>
  )
}
