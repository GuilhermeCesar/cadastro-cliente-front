import PropTypes from 'prop-types';
import {Card, CardBody,CardTitle} from 'reactstrap';

import '../css/detail.css';


const Details = (props) => {
    const customer = props.data;

    return (
        <div>
            { props.data
            ?
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>{customer.fullName}</CardTitle>
                        {/*<CardSubtitle>{HelperProposal(proposta.status)}</CardSubtitle>*/}
                    </CardBody>
                </Card>
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