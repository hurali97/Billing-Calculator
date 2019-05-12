import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Container, Row, Col } from 'react-grid-system';
import InputAdornment from '@material-ui/core/InputAdornment';
import { connect } from "react-redux";
import MenuItem from '@material-ui/core/MenuItem';
import Unit from './Unit';


const styles = {
    card: {
        minWidth: 100,
    },

    title: {
        fontSize: 18,
    },
    pos: {
        marginBottom: 12,
    },
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 50,
    },

};


function SimpleCard(props) {

    const { classes } = props;
    return (


        <Container fluid>

            <Row>
                <Col md={4} sm={1} xs={1}></Col>
                <Col md={4} sm={10} xs={10}>


                    <Card style={{
                        marginTop: '20px', border: '1px solid darkgray',
                        background: 'linear-gradient(to right, #9796f0,#fbc7d4)'
                    }}>

                        <CardContent>

                            <div style={{ marginTop: '20px' }}>
                                <Typography variant="h4" >
                                    Billing Calculator
                                    </Typography>

                                <div style={{ marginTop: '20px' }}>
                                    <TextField
                                        id="item"
                                        label="Item"
                                        placeholder="Item Name"
                                        margin="normal"
                                        variant="outlined"
                                        onChange={props.onItem}
                                    />

                                    <br></br>
                                    <Unit />
                                    <br></br>
                                    <TextField
                                        id="quantity"
                                        label="Quantity"
                                        
                                        margin="normal"
                                        variant="outlined"
                                        onChange={props.onQuantity}
                                    />

                                    <br></br>

                                    <TextField
                                        id="amount"
                                        label="Amount"
                                        placeholder="Amount Per Item"
                                        margin="normal"
                                        variant="outlined"
                                        onChange={props.onAmount}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                        }}
                                    />
                                    <br></br>
                                    <Button size="small" style={{ marginTop: '2vh', backgroundColor: '#00b5ad', color: 'white' }} onClick={props.onAdd} variant="contained"  >
                                        Add
                                       </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Col>
                <Col md={4} sm={1} xs={1}></Col>
            </Row>
        </Container>

    );
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

//export default withStyles(styles)(SimpleCard);

const mapStateToProps = state => {
    return {
        item: state.item,
        amount: state.amount,
        quantity: state.quantity,
    };
};

const mapDispachToProps = dispatch => {
    return {
        onItem: (event) => dispatch({ type: "item", value: event.target.value }),
        onQuantity: (event) => dispatch({ type: "quantity", value: event.target.value }),
        onAmount: (event) => dispatch({ type: "amount", value: event.target.value }),
        onAdd: () => dispatch({ type: "add" }),
    };
};

export default connect(
    mapStateToProps,
    mapDispachToProps
)(SimpleCard);