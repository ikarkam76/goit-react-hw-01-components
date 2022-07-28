import PropTypes from 'prop-types';
import { TableRow, TableColumn } from 'components/TransactionHistory/Transaction/Transaction.styled';

export const Transaction = ({type, amount, currency, index}) => {
    return <tbody>
        <TableColumn index={index}>
            <TableRow>{type}</TableRow>
            <TableRow>{amount}</TableRow>
            <TableRow>{currency}</TableRow>
            </TableColumn>
        </tbody>
}

Transaction.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
}