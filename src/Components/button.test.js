import React from 'react'
import Button from './button'
import {shallow} from 'enzyme'

it('renders without crashing', ()=> {
    shallow(<Button/>)
}) 