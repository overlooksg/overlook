import React from 'react'
import Head from './Head'
import Nav from './Nav'

export default ({ title = '', children }) => (
    <div>
        <Head title={title} />
        <Nav />
        {children}
    </div>
)
