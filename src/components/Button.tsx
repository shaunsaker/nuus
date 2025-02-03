import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { twMerge } from 'tailwind-merge'

type Props = TouchableOpacityProps

export const Button = ({ className, disabled, children, ...props }: Props) => {
  return (
    <TouchableOpacity
      {...props}
      className={twMerge(
        'bg-primary p-4 w-full rounded-lg flex-row items-center justify-center',
        disabled && 'opacity-50',
        className,
      )}
      disabled={disabled}
    >
      <Text className="text-base-100 text-lg font-medium">{children}</Text>
    </TouchableOpacity>
  )
}
