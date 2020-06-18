import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import DogIndex from '../DogIndex'

const dogs = [
    {
        id:1,
        name:"Fiddlesticks",
        age: 4,
        enjoys: "chasing my tail"
    },
    {
        id:2,
        name:"Beevis",
        age: 5,
        enjoys: "chewing my toy"
    }
]

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () =>{
    const div = document.createElement('div')
    ReactDOM.render(<DogIndex />, div)
})

it('renders the doggos', ()=>{
    const component = mount(<DogIndex dogs={ dogs } />)
    // const headers = component.find('div')
    expect(component.find('h5')).toBe(2)
})