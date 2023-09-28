import { render } from '@testing-library/react-native'
import { Product } from './Product'
import { products } from '../../mock/products'

describe('Product', () => {

  it('should render Product component correctly', () => {
    const product = products[0]
    const { getByTestId } = render(<Product {...product} />)

    const category = getByTestId('product-category')
    const image = getByTestId('product-image')
    const title = getByTestId('product-title')
    const description = getByTestId('product-description')
    const price = getByTestId('product-price')


    expect(category).toBeTruthy()
    expect(image).toBeTruthy()
    expect(title).toBeTruthy()
    expect(description).toBeTruthy()
    expect(price).toBeTruthy()
  })
})