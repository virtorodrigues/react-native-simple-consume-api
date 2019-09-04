import React, { Component } from 'react'

import { 
  View, 
  Text, 
  FlatList, 
  TouchableOpacity, 
  StyleSheet, 
  ActivityIndicator 
} from 'react-native'
import api from '../services/api'

export default class Main extends Component {

  static navigationOptions = {
    title: 'Lista de tecnologia',
    headerStyle: {
      backgroundColor: '#993399',
    },
    headerTintColor: '#FFF'
  }

  state = {
    docs: [],
    page: 1,
    productInfo: {}
  }

  componentDidMount() {
    this.loadProducts()
  }

  loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`)
    const { docs, ...productInfo } = response.data

    this.setState({ 
      docs: [...this.state.docs, ...docs],
      productInfo,
      page
    })
  }

  _renderItem = ({ item }) => (
    <View style={ styles.productContainer }>
      <Text style={ styles.productTitle }>{ item.title }</Text>
      <Text style={ styles.productDescription }>{ item.description }</Text>
      <TouchableOpacity 
        style={ styles.productButton } 
        onPress={ () => {
          this.props.navigation.navigate('Product', { product: item })
      } }>
        <Text style={ styles.productButtonText }>Acessar</Text>
      </TouchableOpacity>
    </View>
  )

    _loadMore = () => {
      const { page, productInfo } = this.state

      if(page === productInfo.pages) return

      const pageNumber = page + 1

      this.loadProducts(pageNumber)
    }

  render () {
    console.log('aaaaaaaa')
    return (
      <View style={ styles.container }>
        { !this.state.docs.length && (
          <ActivityIndicator size="large" color="#993399" style={{ marginTop: 20 }} />
        ) || (
          <FlatList
            contentContainerStyle={ styles.list }
            data={ this.state.docs }
            keyExtractor={ item => item._id }
            renderItem={ this._renderItem }
            onEndReached={ this._loadMore }
            onEndReachedThreshold={ 0.1 }
          />
        ) }
       
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
  list: {
    padding: 20
  },
  productContainer: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 20,
    padding: 20,
    borderRadius: 5
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333'
  },
  productDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: '#999'
  },
  productButton: {
    height: 42,
    borderWidth: 2,
    borderColor: '#993399',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'transparent',
    marginTop: 10,
  },
  productButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#993399'
  }
})