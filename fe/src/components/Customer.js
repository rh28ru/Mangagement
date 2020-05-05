import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Customer extends React.Component{
    render(){
        return (
            <TableRow>
                <TableCell> {this.props.customer.id}</TableCell>
                <TableCell> <img src={this.props.customer.image} alt="profile"/></TableCell>
                <TableCell> {this.props.customer.name}</TableCell>
                <TableCell> {this.props.customer.birthday}</TableCell>
                <TableCell> {this.props.customer.gender}</TableCell>
                <TableCell> {this.props.customer.job}</TableCell>
            </TableRow>
        )
    }
}

export default Customer;