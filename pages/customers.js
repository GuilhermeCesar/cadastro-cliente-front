import React from 'react';
import {Col} from "reactstrap";

import Layout from '../components/Layout';
import Details from '../components/Details';
import List from '../components/List';

import CustumerService from '../services/CustumerService';


const CustomerPage = props => (
    <Layout>
        <Col md={4}>
            <List data={props.customers}/>
        </Col>
        <Col md={8}>
            <Details data={props.selectCustomer}/>
        </Col>
    </Layout>
);

CustomerPage.getInitialProps = async ({ req, query }) => {
    const  custumerService =  new CustumerService();
    const customers = await custumerService.getAllCustumers();
    const selectCustomer = customers.filter(item => item.id == query.id)[0] || null;

    return {
        customers,
        selectCustomer
    }
};

export default CustomerPage;