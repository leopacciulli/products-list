import React from 'react'
import { ActivityIndicator, View } from 'react-native'

export function Loader() {
  return (
    <View className="flex-1 justify-center items-center">
      <ActivityIndicator size="large" color="#1e3a8a" testID='activity-indicator' />
    </View>
  )
}