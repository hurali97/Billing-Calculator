import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Container, Row, Col } from 'react-grid-system';

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


        <Container>

            <Row>
                <Col md={4} sm={1} xs={1}></Col>
                <Col md={4} sm={10} xs={10}>


                    <Card className={classes.card} style={{
                        marginTop: '20px', border: '1px solid darkgray',
                        background: 'linear-gradient(to right, #9796f0,#fbc7d4)'
                    }}>

                        <CardContent>

                            <div style={{ marginTop: '20px' }}>
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

export default withStyles(styles)(SimpleCard);