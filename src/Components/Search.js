import React from 'react';
import { Input } from '../../node_modules/reactstrap'


export default function Search(props) {
    return (
        <form className='search'>
            <div className='form-group'>
                <Input 
                    className='form-control'
                    onChange={props.handleInputChange}
                    placeholder="Search for employee..." />
            </div>
        </form>
        
    )
}