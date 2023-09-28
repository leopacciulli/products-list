import { formatPrice } from './formatPrice'

describe('formatPrice', () => {
  it('should return a formatted price', () => {
    const price = 2.33
    const formattedPrice = formatPrice(price)
  
    expect(formattedPrice).toContain('R$')
  })
})