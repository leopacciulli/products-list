import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { Loader } from '../components/Loader/Loader'
import { Product, ProductType } from '../components/Product/Product'
import { Search } from '../components/Search/Search'
import { api } from '../server/api'

export function Home() {
  const [isFetchingProducts, setIsFetchingProducts] = React.useState(false)
  const [searchProductValue, setSearchProductValue] = React.useState('')
  const [products, setProducts] = React.useState<ProductType[]>([])
  const [filteredProducts, setFilteredProducts] = React.useState<ProductType[]>([])

  React.useEffect(() => {
    async function loadData() {
      setIsFetchingProducts(true)
      
      const response = await api.get('/products') //?limit=X
      setProducts(response.data)
      setIsFetchingProducts(false)
    }

    loadData()
  }, [])

  const onSearchProduct = (value: string) => {
    const filteredResults = products.filter((product) =>
      product.title.trim().toLowerCase().includes(value.trim().toLowerCase())
    )
    
    setSearchProductValue(value)
    setFilteredProducts(filteredResults)
  }

  const onClearSearch = () => {
    setSearchProductValue('')
    setFilteredProducts([])
  }

  if (isFetchingProducts) {
    return <Loader />
  }

  //Verifica se o produto foi encontrado na lista ao (e se de fato) buscar/digitar
  const productNotFound = !filteredProducts.length && searchProductValue
  const productsData = productNotFound 
    ? [] 
    : filteredProducts.length > 0 ? filteredProducts : products

  return (
    <View className="flex-1 px-4">
      <Text
        testID='home-title'
        className="mb-6 text-center text-2xl font-bold text-blue-950">
        Home
      </Text>

      <Search
        onChange={onSearchProduct}
        onClearSearch={onClearSearch}
        searchValue={searchProductValue}
        showClearSearchButton={!!searchProductValue}
      />

      {/*
        Uma melhoria para performance seria incluir paginação no FlatList
        para carregar os dados da API conforme o usuário vai dando scroll...
        Porém, a Fake-Store-API ainda não possui o recurso de paginação (To-Do).
      */}
      <FlatList
        data={productsData}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
        <View key={item.title} className='w-[48%] mb-4'>
          <Product {...item} />
        </View>
        )}
        numColumns={2}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ marginTop: 24, paddingBottom: 20 }}
        ListEmptyComponent={<Text className='text-center text-lg'>Product Not Found</Text>}
      />
    </View>
  )
}
