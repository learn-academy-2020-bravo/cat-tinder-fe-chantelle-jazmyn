import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import DogIndex from '../DogIndex'

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () =>{
    const div = document.createElement('div')
    ReactDOM.render(<DogIndex />, div)
})

it('renders the doggos', ()=>{
    const component = mount(<DogIndex/>)
    const headings = component.find('h5')
    expect(headings.length).toBe(2)
})