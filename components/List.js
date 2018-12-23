import Item from './Item'
import PropTypes from 'prop-types'

const List = (props)=>(
    <div>
        {props.data.map(custumer =>
             (<Item key={custumer.id} data={custumer} />)
        )}
    </div>
);

List.propTypes = {
    data: PropTypes.array.isRequired
};

export default List;