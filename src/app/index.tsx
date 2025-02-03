import { MaterialIcons } from '@expo/vector-icons'
import { useCallback, useRef, useState } from 'react'
import { FlatList, Modal, TextInput, TouchableOpacity, View } from 'react-native'

import { Button } from '@/components/Button'
import { HeadingText } from '@/components/HeadingText'
import { Logo } from '@/components/Logo'
import { NewsArticle } from '@/components/NewsArticle'
import { Page } from '@/components/Page'
import { ParagraphText } from '@/components/ParagraphText'
import { Skeleton } from '@/components/Skeleton'
import { TitleText } from '@/components/TitleText'
import { useNews } from '@/newsApi/hooks/useNews'
import { NewsApiSortByType } from '@/newsApi/types'

const SORT_BY_TITLES = {
  publishedAt: 'Date',
  relevancy: 'Relevancy',
  popularity: 'Popularity',
}

export default function Index() {
  const queryInputRef = useRef<TextInput>(null)

  const [query, setQuery] = useState('')
  const [sortBy, setSortBy] = useState<NewsApiSortByType>('publishedAt')
  const [sortByModalVisible, setSortByModalVisible] = useState(false)

  const { mutate: fetchNews, isPending: isLoading, data } = useNews()

  const handleFetchNews = useCallback(() => {
    fetchNews({ query, sortBy })

    queryInputRef.current?.blur()
  }, [fetchNews, query, sortBy])

  const onSearch = useCallback(() => {
    handleFetchNews()
  }, [handleFetchNews])

  const onSortChange = useCallback(
    (option: NewsApiSortByType) => {
      setSortBy(option)
      setSortByModalVisible(false)

      if (query) {
        handleFetchNews()
      }
    },
    [handleFetchNews, query],
  )

  return (
    <Page>
      <View className="flex-col gap-8">
        <Logo />

        <View className="flex-col gap-4">
          <View className="relative">
            <TextInput
              ref={queryInputRef}
              className="bg-base-200 px-12 p-4 leading-tight rounded-lg text-lg text-neutral placeholder:text-neutral/50"
              placeholder="Search for news..."
              value={query}
              onChangeText={setQuery}
            />

            <MaterialIcons className="absolute left-4 top-1/2 -translate-y-1/2" name="search" size={24} color="black" />

            {query && (
              <TouchableOpacity
                className="absolute right-4 top-1/2 -translate-y-1/2"
                onPress={() => {
                  setQuery('')
                }}
              >
                <MaterialIcons name="close" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>

          <Button onPress={() => setSortByModalVisible(true)}>Sort By: {SORT_BY_TITLES[sortBy]}</Button>

          <Modal
            animationType="slide"
            transparent={true}
            visible={sortByModalVisible}
            onRequestClose={() => setSortByModalVisible(false)}
          >
            <View className="flex-1 justify-center items-center flex-col bg-neutral/80 p-4">
              <View className="bg-base-100 p-4 rounded-lg flex flex-col gap-4 w-full">
                <TitleText>Select Sort Option</TitleText>

                <Button onPress={() => onSortChange('publishedAt')}>Sort by {SORT_BY_TITLES.publishedAt}</Button>
                <Button onPress={() => onSortChange('relevancy')}>Sort by {SORT_BY_TITLES.relevancy}</Button>
                <Button onPress={() => onSortChange('popularity')}>Sort by {SORT_BY_TITLES.popularity}</Button>

                <Button onPress={() => setSortByModalVisible(false)}>Cancel</Button>
              </View>
            </View>
          </Modal>

          <Button disabled={!query} onPress={onSearch}>
            Search
          </Button>
        </View>

        <View className="flex-col gap-4">
          <HeadingText>Results</HeadingText>

          {isLoading ? (
            <View className="flex-col gap-8">
              {Array.from({ length: 5 }).map((_, index) => (
                <Skeleton key={index} className="h-48" />
              ))}
            </View>
          ) : (
            <FlatList
              data={data?.data.articles || []}
              renderItem={({ item }) => <NewsArticle {...item} />}
              keyExtractor={item => item.url}
              ListEmptyComponent={<ParagraphText>No results found.</ParagraphText>}
              ItemSeparatorComponent={() => <View className="h-8" />}
            />
          )}
        </View>
      </View>
    </Page>
  )
}
