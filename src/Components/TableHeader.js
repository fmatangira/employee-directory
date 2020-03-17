import React from 'react';

export default function TableHeader(props) {

    return (
        <thead>
            <tr>
                {props.headers.map(header => <th key={props.headers.length * Math.random()}>{header}</th>)}
            </tr>
        </thead>
    )
}