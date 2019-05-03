import React from 'react';
import './App.css';
import { connect } from "react-redux";


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
          <button  style={{ marginTop: '2vh' }} onClick={this.props.onAdd}>Add</button>

          <button style={{ marginTop: '2vh' }} onClick={this.props.onSummary}>Summary</button>
         
          

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


          {(this.props.show)
            ? (
              <div>
                {this.props.summary.map(function (elem, i) {
                  {
                    sum += parseInt(elem.amount)
                  }
                  return <p key={elem.id}>Item : {elem.item} , Amount : {elem.amount}</p>;
                })}
                <p>Total : {sum}
                </p>
              </div>
            )
            : <h3>No Item !</h3>
          }
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
