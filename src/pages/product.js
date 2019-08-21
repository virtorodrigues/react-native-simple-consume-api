import React from 'react'

import { Text } from 'react-native'
import { WebView } from 'react-native-webview'

const Product = ({ navigation }) => (
  <WebView source={{ uri: navigation.state.params.product.url }} />
)

Product.navigationOptions = ({navigation}) => ({
  title: navigation.state.params.product.title,
  headerStyle: {
    backgroundColor: '#993399',
  },
  headerTintColor: '#FFF'
})

export default Product