import PropTypes from 'prop-types';
import { Transaction } from 'components/TransactionHistory/Transaction/Transaction';
import { TableBody, TableHead, TableRow } from 'components/TransactionHistory/TransactionHistory.styled';


export const Transactions = ({items}) => {
    return <TableBody>
        <TableHead>
            <TableRow>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </TableRow>
        </TableHead>

        {items.map((item, i) => <Transaction key={item.id} type={item.type} amount={item.amount} currency={item.currency} index={i} />)}
    </TableBody>
}

Transactions.propTypes = {
    items: PropTypes.array.isRequired,
}