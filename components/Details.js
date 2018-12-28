import '../css/detail.css';
import PropTypes from 'prop-types';
import {Button} from 'reactstrap';
import config from '../cadastro-cliente.config';
import Link from "next/link";

import NewCustomer from "./NewCustomer";


const Details = (props) => {
    const customer = props.data;

    return (
        <div>
            { props.data
            ?
            <div className="box">
                <style jsx>
                    {`
                        .image{
                            background-image: url('${config.baseURL}/customers/image/${customer.image}');
                        }
                    ` }
                </style>
                <div className="image"></div>
                <div className="data">
                    <div>{customer.fullName}</div>
                    <div>{customer.socialId}</div>
                    <div>{customer.email}</div>
                    <div>{customer.telephone}</div>
                </div>
                <div className="action">
                    <Link href={{pathname:'customers', query:{excluded:customer.id}}}>
                        <Button>Excluir</Button>
                    </Link>
                    <NewCustomer user={customer} buttonLabel="Editar usuário"/>
                </div>
            </div>
                :
            <div className="box">
                <h4>Clique em um item para visualizar</h4>
            </div>
            }
        </div>
    )
};

Details.propTypes = {
    data: PropTypes.object,
};

export default Details;