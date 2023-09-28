import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch'
import { faX } from '@fortawesome/free-solid-svg-icons/faX'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { TextInput, TouchableOpacity, View } from 'react-native'

interface SearchProps {
  onChange: ((value: string) => void)
  onClearSearch: () => void
  searchValue: string
  showClearSearchButton: boolean
}

export function Search({ onChange, onClearSearch, searchValue, showClearSearchButton }: SearchProps) {
  return (
    <View className='bg-gray-100 px-5 rounded-full flex-row items-center h-12'>
      <FontAwesomeIcon
        testID='search-icon'
        icon={faSearch}
        color='#9ca3af'
      />
      <TextInput
        testID='text-input'
        value={searchValue.toString()}
        onChangeText={onChange}
        placeholder='Busque seus produtos aqui'
        className='ml-3 w-[85%] h-full text-[16px]'
      />

      {showClearSearchButton && (
        <TouchableOpacity
          onPress={onClearSearch}
          className='ml-3'>
          <FontAwesomeIcon
            testID='clear-search'
            icon={faX}
            color='#9ca3af'
          />
        </TouchableOpacity>
      )}
    </View>
  )
}
