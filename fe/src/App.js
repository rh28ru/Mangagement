import React from 'react';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import { withStyles} from '@material-ui/core/styles';

import './App.css';

const styles= theme=> ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table:{
    minWidth: 1080
  }
})

// const customers= [{
//     id: 1,
//     image:'https://placeimg.com/64/64/1',
//     name:'탁성길',
//     birthday:'960307',
//     gender:'남자',
//     job:'대학생'
//   },{
//     id: 2,
//     image:'https://placeimg.com/64/64/2',
//     name:'황경진',
//     birthday:'850205',
//     gender:'남자',
//     job:'대학생'
//   },{
//   id: 3,
//   image:'https://placeimg.com/64/64/3',
//   name:'리훈',
//   birthday:'750208',
//   gender:'남자',
//   job:'대학생'
//   },
// ]

class App extends React.Component{
  state = {
    customers: ""
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({customers:res}))
      .catch(err => console.log(err)) 
  }

  callApi = async() => {
    const response = await fetch('/api/customers')
    const body = await response.json()
    return body
  }

  render(){
    const {classes} = this.props;
    return (
      <Paper className= {classes.root}>
        <Table className= {classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>사진</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            
            { this.state.customers === ""? "": this.state.customers.map( c=> { return( <Customer customer = {c} key={c.id}/>); }) }
          </TableBody>
        </Table>
      </Paper>
        
      );
    }
  }


export default withStyles(styles) (App);
