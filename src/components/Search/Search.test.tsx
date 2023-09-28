import { fireEvent, render } from '@testing-library/react-native'
import { Search } from './Search'

//Mock para encontrar o component/lib de Icone
jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: ''
}))

describe('Search', () => {
  it('should render Search component correctly', () => {
    const { getByTestId } = render(<Search onChange={() => {}} searchValue='' />)

    const searchIcon = getByTestId('search-icon')
    const textInput = getByTestId('text-input')

    expect(searchIcon).toBeTruthy()
    expect(textInput).toBeTruthy()
  })

  it('should call onChange simulating an input change text', () => {
    const onChangeMock = jest.fn()
    const { getByTestId } = render(<Search onChange={onChangeMock} searchValue='' />)

    const textInput = getByTestId('text-input')
    fireEvent.changeText(textInput, "Casual")

    expect(onChangeMock).toHaveBeenCalledWith("Casual")
  })
})