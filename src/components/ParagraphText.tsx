import { Text, TextProps } from 'react-native'
import { twMerge } from 'tailwind-merge'

type Props = TextProps

export const ParagraphText = ({ className, children, ...props }: Props) => {
  return (
    <Text className={twMerge('text-neutral text-base', className)} {...props}>
      {children}
    </Text>
  )
}
