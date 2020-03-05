import React from 'react';
import Jumbotron from '../../node_modules/react-bootstrap/Jumbotron';
import '../css/banner.css';


export default function Banner() {
    return (
        <Jumbotron>
            <h1>Employee Directory</h1>
            <p>Click on a header to sort the desired column or filter table using the search field.</p>
        </Jumbotron>
    )
}