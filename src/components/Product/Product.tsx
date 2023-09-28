import React from 'react'
import { Image, Text, View } from 'react-native'
import { formatPrice } from '../../utils/formatPrice'

export interface ProductType {
  title: string
  price: number
  description: string
  category: string
  image: string
}

export function Product({ category, description, image, price, title }: ProductType) {
  const formattedPrice = formatPrice(price)

  return (
    <View className="border-2 border-gray-100 bg-white rounded-sm p-2 flex-col items-center">
      <View className='bg-blue-900 rounded-full py-1 px-2'>
        <Text
          testID='product-category'
          className='text-white text-xs'>
          {category}
        </Text>
      </View>

      <Image
        width={88}
        height={88}
        className='mt-4'
        resizeMode='contain'
        source={{ uri: image }}
        testID='product-image'
      />

      <Text
        testID='product-title'
        numberOfLines={2}
        className='text-center mt-4 text-base font-bold leading-5'>
        {title}
      </Text>

      <Text
        testID='product-description'
        numberOfLines={2}
        className='text-center mt-2 text-gray-500'>
        {description}
      </Text>

      <Text
        testID='product-price'
        className='mt-2 text-lg font-bold text-blue-950'>
        {formattedPrice}
      </Text>
    </View>
  )
}
