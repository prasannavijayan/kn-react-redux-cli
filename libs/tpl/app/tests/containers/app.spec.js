import React from 'react'
import { shallow } from 'enzyme'
import App from 'containers/app'

describe('containers/app', () => {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<App />)
  })

  it('Renders a welcome message', () => {
    const welcome = _wrapper.find('h1')
    expect(welcome).to.exist
    expect(welcome.text()).to.match(/Hello World!!!/)
  })
})