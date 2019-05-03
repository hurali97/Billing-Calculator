import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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


class  CustomizedTable extends React.Component {
    constructor(props){
        super(props);
      
    }

    
    render(){
        const {classes}=this.props;
        const summary=this.props.summary;
        return (
            <Paper className={classes.root}>
              <Table className={classes.table}>
                <TableHead style={{backgroundColor:'#00b5ad'}}>
                  <TableRow>
                    <CustomTableCell align='center'>Item</CustomTableCell>
                    <CustomTableCell align="center">Amount($)</CustomTableCell>
                    
                  </TableRow>
                </TableHead>
                <TableBody>
                  {summary.map(row => (
                    <TableRow className={classes.row} key={row.id}>
                      <CustomTableCell align="center" component="th" scope="row">
                        {row.item}
                      </CustomTableCell>
                      <CustomTableCell align="center">{row.amount}</CustomTableCell>
                
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          );
    }
  
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);