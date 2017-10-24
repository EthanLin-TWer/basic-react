import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import assert from 'assert'

import { Home } from './Home'

Enzyme.configure({ adapter: new Adapter() })

it('should run first test', () => {
  const component = shallow(<Home />)

  assert.equal(component.length, 1)
})
