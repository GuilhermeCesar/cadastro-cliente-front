import 'bootstrap/dist/css/bootstrap.min.css';

import {Col, Container, Row} from 'reactstrap';
import PropTypes from 'prop-types';

import NewCustomer from './NewCustomer';


const Layout = (props) => (
    <Container>
        <style>
        {`
            .header{
                padding: 30px;
            }
        `}
        </style>
        <Row className="header">
            <Col md={6}>
                <h4>Proposta de Crédito</h4>
            </Col>
            <Col md={6}>
                <NewCustomer buttonLabel="Criar Usuário"/>
            </Col>
        </Row>
        <Row>
            {props.children}
        </Row>
    </Container>
);

Layout.propTypes = {
    children: PropTypes.any.isRequired,
};

export default Layout
