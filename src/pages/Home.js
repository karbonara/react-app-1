import React, {Fragment} from 'react'
import {Form} from '../components/form'
import {Notes} from '../components/Notes'

export const Home = () => {
    return (
        <Fragment>
            <Form />

            <hr />

            <Notes />
        </Fragment>
    )
}