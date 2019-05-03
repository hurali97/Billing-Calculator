import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const styles = {
    card: {
        minWidth: 100,
    },

    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

function SimpleCard(props) {
   
    return (

        <div style={{ marginTop: '25px' }}>
            <Typography variant="h3" component="h2">
                Billing Calculator
                 </Typography>

            <div style={{ marginTop: '20px' }}>
                <TextField
                    id="item"
                    label="Item"
                    margin="normal"
                    variant="outlined"
                    onChange={props.onItem}
                />

                <br></br>
                <TextField
                    id="amount"
                    label="Amount"
                    margin="normal"
                    variant="outlined"
                    onChange={props.onAmount}

                />
                <br></br>
                <Button size="small" style={{ marginTop: '2vh', backgroundColor: '#00b5ad', color: 'white' }} onClick={props.onAdd} variant="contained"  >
                    Add
        </Button>
            </div>
        </div>
    );
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);