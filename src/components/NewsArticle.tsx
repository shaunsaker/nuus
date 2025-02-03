import { Image, Linking, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import { twMerge } from 'tailwind-merge'

import { dayjs } from '@/date/dayjs'
import { NewsArticleType } from '@/newsApi/types'

import { ParagraphText } from './ParagraphText'
import { SmallText } from './SmallText'
import { TitleText } from './TitleText'

type Props = TouchableOpacityProps & NewsArticleType

export const NewsArticle = ({
  className,
  author,
  content,
  description,
  publishedAt,
  source,
  title,
  url,
  urlToImage,
  ...props
}: Props) => {
  return (
    <TouchableOpacity
      className={twMerge('bg-base-100 flex-col gap-y-4 rounded-xl p-4 border-base-300 border-2', className)}
      onPress={() => {
        Linking.openURL(url)
      }}
      {...props}
    >
      {urlToImage && <Image source={{ uri: urlToImage }} className="w-full h-48 rounded-xl bg-base-200" />}

      <TitleText>{title}</TitleText>

      <View className="flex-row items-center">
        {author && <SmallText>{author} | </SmallText>}

        <SmallText>{dayjs(publishedAt).fromNow()}</SmallText>
      </View>

      <ParagraphText>{description}</ParagraphText>
    </TouchableOpacity>
  )
}
