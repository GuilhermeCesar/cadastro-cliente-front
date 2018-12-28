import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from 'reactstrap';
import PropTypes from 'prop-types';
import NewCustomer from './NewCustomer';


const Layout = (props) => (
    <Container className="container">
        <style>
        {`
        .header{
            padding: 30px;
            background-image: url(https://essentia.com.br/wp-content/themes/altus/images/menu-fundo.png);
            background-repeat: round;
        }

        .logo {
            background-repeat: no-repeat;
            height: 100px;
            background-position: center;
            background-size: contain;
            background-image: url('/static/logo.png');
          }
        .name-sistem{
            margin: auto;
            color:#86754d;
          }

        .create-user{
            margin: auto;
        }

        .container{
            margin: 0;
            width: 100%;
            min-width: 100%;
        }
        `}
        </style>
        <Row className="header">
            <Col md={4}>
                <div className="logo">
                </div>
            </Col>
            <Col md={6} className='name-sistem'>
                <h4>Cadastro de usuários</h4>
            </Col>
            <Col md={2} className="create-user">
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
