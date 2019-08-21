import { createStackNavigator, createAppContainer } from 'react-navigation'

import Main from './pages/main'
import Product from './pages/product'

const AppNavigation = createStackNavigator({
    Main,
    Product
  }, {  
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#993399'
      },
      headerTintColor: '#FFF'
    },
})

export default createAppContainer(AppNavigation)