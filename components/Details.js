import PropTypes from 'prop-types';
import {Row, Col} from 'reactstrap';
import config from '../cadastro-cliente.config'

import '../css/detail.css';


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

            </div>
                :
            <h4>Clique em um item para visualizar</h4>
            }
        </div>
    )
};

Details.propTypes = {
    data: PropTypes.object,
};

export default Details;