import React from 'react';
import './App.css';
import { connect } from "react-redux";
import CustomizedTable from './Component/Table';
import { Container, Row, Col } from 'react-grid-system';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import SimpleCard from './Component/Card'


class App extends React.Component {

  render() {
    let that = this;
    let sum = 0;

    return (

      <div className="App">

<SimpleCard onItem={this.props.onItem} onAmount={this.props.onAmount} onAdd={this.props.onAdd}/>

       
    

        <Container>
          <Row>
            <Col md={4} sm={1} xs={1}>
            </Col>

            <Col md={4} sm={10} xs={10}>
              {(this.props.show==='yes')
                ? (
                  <CustomizedTable summary={this.props.summary} show={this.props.show}/>
                )
                :(this.props.show==='none')? <h3>Please Add Items And Amount !</h3>
                :(this.props.show==='string')? <h3>Please Input A Number In Amount !</h3>
                :console.log("no")
              }
            </Col>

            <Col md={4} sm={1} xs={1}>
            </Col>
          </Row>
        </Container>



      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    item: state.item,
    amount: state.amount,
    show: state.show,
    summary: state.summary,
  };
};

const mapDispachToProps = dispatch => {
  return {
    onItem: (event) => dispatch({ type: "item", value: event.target.value }),
    onAmount: (event) => dispatch({ type: "amount", value: event.target.value }),
    onAdd: () => dispatch({ type: "add" }),
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);
