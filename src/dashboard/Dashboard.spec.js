// Test away
import React from 'react'
import {render} from 'react-testing-library'
import Dashboard from './Dashboard.js'

describe('Rendering everything', () => {
    it('Should render all the components and it\'s contents', () => {
        const {getByText}= render(<Dashboard />)

        getByText(/unlocked/i)
        getByText(/open/i)
        getByText(/lock gate/i)
        getByText(/close gate/i)

    })
})
