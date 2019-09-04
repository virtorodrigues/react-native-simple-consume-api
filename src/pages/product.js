import React from 'react'

import { Text, View, ActivityIndicator } from 'react-native'
import { WebView } from 'react-native-webview'



const Product = ({ navigation }) =>{

  ActivityIndicatorLoadingView = () => {
    //making a view to show to while loading the webpage
    return (
      <ActivityIndicator
         color="#993399"
         size="large"
      />
    );
 }

  return (
    <WebView 
      source={{ uri: navigation.state.params.product.url }} 
      javaScriptEnabled={true}
      renderLoading={() => <ActivityIndicator color="#993399" size="large" style={{ alignItems: 'flex-start' }} />}
      startInLoadingState={true}
    />
  )
} 

Product.navigationOptions = ({navigation}) => ({
  title: navigation.state.params.product.title,
  headerStyle: {
    backgroundColor: '#993399',
  },
  headerTintColor: '#FFF'
})

export default Product