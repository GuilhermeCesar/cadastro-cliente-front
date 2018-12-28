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
            <Col md={10}>
                <h4>Cadastro de usuários</h4>
            </Col>
            <Col md={2}>
                <NewCustomer  buttonLabel="Criar Usuário"/>
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
