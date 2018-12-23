import React from 'react';
import {Col} from "reactstrap";

import Layout from '../components/Layout';
import Details from '../components/Details';
import List from '../components/List';

import CustumerService from '../services/CustumerService';


const CustumerPage = props => (
    <Layout>
        <Col md={4}>
            <List data={props.customers}/>
        </Col>
        <Col md={8}>
            <Details data={props.selectProposal}/>
        </Col>
    </Layout>
);

CustumerPage.getInitialProps = async ({ req, query }) => {
    const  custumerService =  new CustumerService();
    const allCustomers = await custumerService.getAllCustumers();

     const selectProposal = allCustomers.filter(item => item.id == query.id)[0] || null;
    return {
        customers:allCustomers,
        selectProposal
    }
};

export default CustumerPage;