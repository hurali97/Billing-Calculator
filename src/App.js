import React from 'react';
import './App.css';
import { connect } from "react-redux";
import CustomizedTable from './Component/Table';
import { Container, Row, Col } from 'react-grid-system';
import SimpleCard from './Component/Card'



class App extends React.Component {

  render() {
   

    return (

      <div className="App">

        {/* <SimpleCard onItem={this.props.onItem} onAmount={this.props.onAmount} onAdd={this.props.onAdd} /> */}

        <SimpleCard />



        <Container fluid>
          <Row>
            <Col md={3} sm={1} xs={1}>
            </Col>

            <Col md={6} sm={10} xs={10}>
              {(this.props.show === 'yes')
                ? (
                  <CustomizedTable summary={this.props.summary} />
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

  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);
