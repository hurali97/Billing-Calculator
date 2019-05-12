import React from 'react';
import './App.css';
import { connect } from "react-redux";
import CustomizedTable from './Component/Table';
import { Container, Row, Col } from 'react-grid-system';
import SimpleCard from './Component/Card';
import Button from '@material-ui/core/Button';
import { Helmet } from "react-helmet";



class App extends React.Component {


  render() {
   

    return (

      <div className="App">

        {/* <SimpleCard onItem={this.props.onItem} onAmount={this.props.onAmount} onAdd={this.props.onAdd} /> */}
        <Helmet>
        <title>Billing Calculator</title>
        <meta name="description" content="A Billing Calculator to help you with your calculations of groceries and other stuff" />
        <meta name="keywords" content="billing-calculator,billing,grocery,calculator" />
      </Helmet>

        <SimpleCard />



        <Container fluid>
          <Row>
            <Col md={3} sm={1} xs={1}>
            </Col>

            <Col md={6} sm={10} xs={10}>
              {(this.props.show === 'yes')
                ? (
                  <div>
                  <CustomizedTable summary={this.props.summary} />
                  <Button size="small" style={{ marginTop: '2vh', backgroundColor: '#00b5ad', color: 'white' }} onClick={this.props.onNewBill} variant="contained"  >
                  New Bill
                 </Button>
                <br></br>
                 </div>
                )
                : (this.props.show === 'none') ? <h3>Please Add Items, Quantity And Amount !</h3>
                : (this.props.show === 'string') ? <h3>Please Input A Number In Amount/Quantity !</h3>
                    : console.log("no")
              }
            </Col>

            <Col md={3} sm={1} xs={1}>
            </Col>
          </Row>
        </Container>



      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    show: state.show,
    summary: state.summary,
    
      };
};

const mapDispachToProps = dispatch => {
  return {
    onNewBill: () => dispatch({ type: "bill" }),
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);
