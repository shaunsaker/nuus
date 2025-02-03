import React from 'react'
import { View, ViewProps } from 'react-native'
import { twMerge } from 'tailwind-merge'

type Props = ViewProps

export const Page = ({ className, children, ...props }: Props) => {
  return (
    <View className="bg-base-100 flex-col flex-1">
      <View className={twMerge('m-safe flex-column flex flex-1 bg-base-100 px-4 py-8', className)} {...props}>
        {children}
      </View>
    </View>
  )
}
