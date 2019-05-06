import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from "react-redux";

const CustomTableCell = withStyles(theme => ({
  head: {
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 6,
    overflowX: 'auto',
  },
  table: {
    minWidth: 50,
  
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(item , amount) {
  id += 1;
  return { id, item , amount};
}
let sum=0;
let temp=0;
let OverallCost=[];


class  CustomizedTable extends React.Component {
    constructor(props){
        super(props);
      
    }

  total=()=>{
    OverallCost.map(row => (
      sum+=parseInt(row)
      
    )
    );
    temp=sum;
    sum=0;
    OverallCost=[];
    }

    costpush=(amount,quantity)=>{
      OverallCost.push((amount*quantity));
      
    }
    

    render(){
        const {classes}=this.props;
        const summary=this.props.summary;
     
     
        return (
            <Paper className={classes.root} style={{height: '80%'}}>
              <Table className={classes.table}>
                <TableHead style={{backgroundColor:'#00b5ad'}}>
                  <TableRow>
                    <CustomTableCell align='center'>Item</CustomTableCell>
                    <CustomTableCell align='center'>Quantity</CustomTableCell>
                    <CustomTableCell align="center">Unit Cost($)</CustomTableCell>
                    <CustomTableCell align="center">OverAll Cost($)</CustomTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    
                    summary.map(row => (
                    <TableRow className={classes.row} key={row.id}>
                      <CustomTableCell align="center" component="th" scope="row">
                        {row.item}
                        
                      </CustomTableCell>
                      <CustomTableCell align="center">{row.quantity}</CustomTableCell>
                      <CustomTableCell align="center">{row.amount}</CustomTableCell>
                      <CustomTableCell align="center">{(row.amount*row.quantity)}</CustomTableCell>
                      {
                       this.costpush(row.amount,row.quantity)
                      }
                    </TableRow>
                  ))
                  }
                </TableBody>
              </Table>
              {
                 this.total()
              }
              <h3>Total : {temp} </h3>
           
            </Paper>
            
          );
    }
   
     
 
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);
