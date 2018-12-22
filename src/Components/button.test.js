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
        const instance = component.getInstance()
        expect(instance.state.text).toBe("")
        instance.handleClick()
        expect(instance.state.text).toBe("JUST CLICKED BRO !")
    })

    test("it shows the expected text when clicked THE RIGHT WAY", ()=>{
        const component = create(<Button text="I AM A BUTTON"/>)
        const rootInstance = component.root
        const button = rootInstance.findByType("button")
        button.props.onClick()
        expect(button.props.children).toBe("JUST CLICKED BRO !")
    })


} )