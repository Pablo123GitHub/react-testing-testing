import React from 'react'
import Button from './button'
import {shallow} from 'enzyme'
import { create } from 'react-test-renderer'

test('renders without crashing', ()=> {
    shallow(<Button/>)
}) 

describe("Button component", ()=>{
    test("it shows the expected text when clicked (WRONG WAY)", ()=>{
        const component = create(<Button text="I AM A BUTTON"/>)
        const instance = component.getInstance();
        expect(instance.state.text).toBe("")
    })
} )