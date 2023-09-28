import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes/'

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView className="flex-1">
        <Routes />
        <StatusBar style="auto" />
      </SafeAreaView>
    </NavigationContainer>
  )
}
