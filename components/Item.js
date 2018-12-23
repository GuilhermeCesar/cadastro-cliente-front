import PropTypes from 'prop-types'
import vars from '../cadastro-cliente.config';
import Link from "next/link";


const Item = (props) => {
    const customer = props.data;

    return (
        <div className="box">
            <Link href={`/custumers?id=${customer.id}`}>
                <div className="title">{customer.fullName}</div>
            </Link>
            <div className="details">
                <div>{customer.socialId}</div>
            </div>
            <style jsx>{`
                .box {
                    border:3px solid #ddd;
                    padding:10px;
                    margin-bottom:10px;
                    display: flex;
                    flex-direction: column;
                }
                .title {
                    font-weight: 800;
                    color: ${vars.primaryColor};
                    cursor: pointer;
                }
                .details {
                    display: flex;
                    justify-content: space-between;
                    font-size: 0.8em;
                }

                .status{
                    background-color: #ddd;
                    border-radius: 999px;
                    padding: 2px 14px;
                    font-size: 0.8em;
                }
            `}</style>
        </div>
    )
};

Item.propTypes = {
    data: PropTypes.object.isRequired
};

export default Item


