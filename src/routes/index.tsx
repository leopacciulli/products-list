import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { Home } from '../pages/Home'

const Tab = createBottomTabNavigator()

export default function Routes() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: () => <FontAwesomeIcon icon={faHome} size={32} color='#112b74' />,
        tabBarStyle: { borderTopColor: '#6b7280' }
      }}
      sceneContainerStyle={{ backgroundColor: '#fff' }}
    >
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
}