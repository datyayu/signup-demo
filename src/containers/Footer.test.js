import React from 'react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'

import { Footer } from './Footer'
import { store } from '../store'


test('It should render the component without crashing', () => {
  shallow(
    <Provider store={store}>
      <Footer />
    </Provider>
  )
})
