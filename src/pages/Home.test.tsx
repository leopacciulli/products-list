import React from 'react'
import { render } from '@testing-library/react-native'
import { Home } from './Home'
import { api } from '../server/api'
import { products } from '../mock/products'

jest.mock('react', () => ({
	...jest.requireActual('react'),
	useState: jest.fn(),
}))

describe('Home', () => {
  const setState = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  it('should render Home without crashing', async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: products })

    jest.spyOn(React, 'useState')
      .mockImplementation(() => [false, setState])
    
    const { getByTestId } = render(<Home />)

    const homeTitle = getByTestId('home-title')
    expect(homeTitle).toBeTruthy()
  })

  it('should render Loader if isFetchingProducts is true', async () => {
    jest.spyOn(React, 'useState')
      .mockImplementation(() => [true, setState])
    
    const { getByTestId, queryByTestId } = render(<Home />)

    const homeTitle = queryByTestId('home-title')
    const activityIndicator = getByTestId('activity-indicator')

    expect(homeTitle).toBeNull()
    expect(activityIndicator).toBeTruthy()
  })
})