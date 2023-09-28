import { render } from '@testing-library/react-native'
import { Loader } from './Loader'

describe('Loader', () => {
  it('should render ActivityIndicator component correctly', () => {
    const { getByTestId } = render(<Loader />)

    const activityIndicator = getByTestId('activity-indicator')
    expect(activityIndicator).toBeTruthy()
  })
})