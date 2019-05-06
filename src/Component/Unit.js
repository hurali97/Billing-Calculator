import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { connect } from "react-redux";

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

const units = [
  {
    value: 'KG',
    label: 'kg',
  },
  {
    value: 'LITRES',
    label: 'Lt',
  },
  {
    value: 'none',
    label: '--',
  },
 
];


class OutlinedTextFields extends React.Component {
    state = {
   
      unit: '',
    };
  
    handleChange = (event) => {
      this.setState({
        unit: event.target.value,
      });
console.log(this.state.unit);
    };
  
    render() {
      
      return (

<TextField
          id="unit"
          select
          label="Unit"
         
          value={this.props.unit}
          onChange={this.props.onUnit}
         
          helperText="Please select A Unit From Above"
          margin="normal"
          variant="outlined"
        >
          {units.map(option => (
            <option key={option.value} value={option.label}>
              {option.label}
             
            </option>
          ))}
        </TextField>
        );
    }
  }
  
  
const mapStateToProps = state => {
    return {
      unit: state.unit,
    };
  };
  
  const mapDispachToProps = dispatch => {
    return {
        onUnit: (event) => dispatch({ type: "unit",value:event.target.value }),
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispachToProps
  )(OutlinedTextFields);