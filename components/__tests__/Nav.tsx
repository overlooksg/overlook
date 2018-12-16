// add some helpful assertions
import 'jest-dom/extend-expect'
import React from 'react'
import { render } from 'react-testing-library'

// this is basically: afterEach(cleanup)
import 'react-testing-library/cleanup-after-each'

// import Nav from '../Nav'

test('two plus two is four', () => {
    const { queryByText } = render(<div />)
    expect(queryByText(/Home/i)).toBeInTheDOM()
})
