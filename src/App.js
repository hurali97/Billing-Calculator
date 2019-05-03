import React from 'react';
import './App.css';
import { connect } from "react-redux";
import CustomizedTable from './Component/Table';
import {Container,Row,Col} from 'react-grid-system';
import Button from '@material-ui/core/Button';


class App extends React.Component {
  
  render(){
    let that=this;
    let sum=0;
    
    return (
    
      <div className="App">
  
        <div style={{ marginTop: '10vh' }}>
          <div>
            <h3>Enter Item :</h3>
            <input id="item" onChange={this.props.onItem}></input>
          </div>
          <div>
            <h3>Enter Amount :</h3>
            <input id="amount" onChange={this.props.onAmount}></input>
          </div>
  
          <Button size="small" style={{ marginTop: '2vh',backgroundColor:'#00b5ad',color:'white' }} onClick={this.props.onAdd} variant="contained"  >
          Add
        </Button>

                {/* {     (this.props.show)
                      ?(
                      <div>
                          {this.props.summary.map(function(elem,i){
                            {
                              sum+=parseInt(elem.amount)
                            }
                      return <p  key={elem.id}>Item : {elem.item} , Amount : {elem.amount}</p>;   
                        })}
                        <p>Total : {sum}
                        </p>
                      </div>
                      )
                      :console.log("no summary")
                }  */}

      <Container>
        <Row>
          <Col md={4} sm={1} xs={1}>
          </Col>

          <Col md={4} sm={10} xs={10}>
          {(this.props.show)
            ? (
            <CustomizedTable summary={this.props.summary}/>
            )
            : <h3>No Item !</h3>
          }
          </Col>

          <Col md={4} sm={1} xs={1}>
          </Col>
          </Row>
          </Container>

         
        </div>
      </div>
    );
  }
 
}

const mapStateToProps = state => {
  return {
    item: state.item,
    amount: state.amount,
    show: state.show,
    summary_item: state.summary_item,
    summary_amount: state.summary_amount,
    summary:state.summary,
  };
};

const mapDispachToProps = dispatch => {
  return {
    onItem: (event) => dispatch({ type: "item", value: event.target.value }),
    onAmount: (event) => dispatch({ type: "amount", value: event.target.value }),
    onAdd:()=>dispatch({ type: "add" }),
    onSummary:()=>dispatch({ type: "summary"}),
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);
