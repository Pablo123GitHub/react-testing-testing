import React from 'react'
import { create } from 'react-test-renderer'
import Users from './Users'
import Axios from 'axios';
jest.mock('axios');



describe (" Users component ", ()=> {
    // it("shows a list of users, WRONG WAY", async ()=>{
    //     const component = create (<Users/>);
    //     const instance = component.getInstance();
    //     await instance.componentDidMount();
    //     // console.log(instance.state)
    // })

    it("shows a list of users, mocking API call", async ()=>{
        const response = {
            data: [{
                name: "George Amigo"
            }, {
                name: "Marco Freund"
            }]
        }
        // We fake the response that axios.get is receiving by 
        // replacing it with the above response 
        Axios.get.mockResolvedValue(response);
        // we use react-test-renderer to render a DOM object component
        const component = create (<Users/>);
        const instance = component.getInstance();
        // we retrieve the asynchronous data coming from the react-test rendered component
        await instance.componentDidMount(); 
        const root = component.root;        
        const listOfLi = root.findAll(element => element.type === "li")      
        // We then check what happens on the "li" contained in the component
       // after making a call on the fake API response  
        expect(listOfLi[0].props.children).toBe("George Amigo")
        expect(listOfLi[1].props.children).toBe("Marco Freund")
    })
})