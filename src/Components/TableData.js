import React from 'react';

export default function TableData(props) {
    
    return (
        <tbody>
            {props.array.map((res,i) => 
                <tr key={i}>
                    <td><img src={res.picture.thumbnail} alt={'profile-pic'} /></td>
                    <td>{res.name.first+' '+res.name.last}</td>
                    <td>{res.cell}</td>
                    <td>{res.email}</td>
                    <td>{res.dob.date}</td>
                </tr>)}
        </tbody>
    )
}