import React, { useState, useEffect }from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import { Container, Row, Col, Table } from '../../node_modules/reactstrap'
import Banner from './Banner';
import Search from './Search';
import TableHeader from './TableHeader';
import TableData from './TableData';
import axios from 'axios';

export default function App() {

    let [state,setState] = useState({
        search: "",
        users: [],
        filteredUsers: [{}]});
    
    useEffect(() => {
        axios.get('https://randomuser.me/api/?results=500')
            .then(res => {
                setState({...state,
                    users: res.data.results});
            })
            .catch(err => console.log(err)
            )},[])
    
    const handleSearchChange = e => {
        setState({ ...state, search: e.target.value });
        console.log(state.search);

        const filter = e.target.value;
        const filteredList = state.users.filter(item => {
        // merge data together, then see if user input is anywhere inside
        let values = Object.values(item)
            .join("")
            .toLowerCase();
        return values.indexOf(filter.toLowerCase()) !== -1;
        });
        setState({ filteredUsers: filteredList });
    }
    console.log(state.users);
    
    return (
    <>
      <Container fluid={true}>
        <Row>
          <Col>
            <Banner />
          </Col>
        </Row>
        <Row>
          <Col sm="12" lg={{ size: 8, offset: 2 }}>
                <Search 
                    handleInputChange={handleSearchChange}
                    results={state.search}
                />
                <div>{state.search}</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table>
                <TableHeader headers={['Image','Name','Phone','Email','DOB']} />
                <TableData array={state.users} />
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  )
  
}
