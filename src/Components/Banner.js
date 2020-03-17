import React from 'react';
import '../css/banner.css';
import { Jumbotron } from '../../node_modules/reactstrap'


export default function Banner() {
    return (
        <Jumbotron>
            <h1>Employee Directory</h1>
            <p>Click on a header to sort the desired column or filter table using the search field.</p>
        </Jumbotron>
    )
}