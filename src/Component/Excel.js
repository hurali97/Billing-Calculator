import React from "react";
import ReactExport from "react-data-export";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const dataSet1 = [
    {
        name: "Johson",
        amount: 30000,
        sex: 'M',
        is_married: true
    },
    {
        name: "Monika",
        amount: 355000,
        sex: 'F',
        is_married: false
    },
    {
        name: "John",
        amount: 250000,
        sex: 'M',
        is_married: false
    },
    {
        name: "Josef",
        amount: 450500,
        sex: 'M',
        is_married: true
    }
];

var dataSet2 = [
    {
        name: "Johnson",
        total: 25,
        remainig: 16
    },
    {
        name: "Josef",
        total: 25,
        remainig: 7
    }
];
let dataset=[];
let sum=0;
let total=[];
class Excel extends React.Component {
constructor(props){
    super(props);
   
}
    
    render() {
   
    dataset=[];
    sum=0;
   
        this.props.summary.map(elem=>dataset.push({item:elem.item,quantity:parseInt(elem.quantity),
            unit:elem.unit,amount:parseInt(elem.amount),overall:parseInt(elem.quantity)*parseInt(elem.amount)}));
     dataset.map(elem=>{
         sum+=parseInt(elem.overall);
     });
     dataset.push({sum:sum});
  
        return (
            <ExcelFile element={  <Button size="small" style={{ marginTop: '2vh',marginLeft:'2vw', backgroundColor: '#00b5ad'
            , color: 'white' }}  variant="contained"  >Download</Button>
        }>
                <ExcelSheet data={dataset} name="Bill">
                    <ExcelColumn  label="Item" value="item"/>
                    <ExcelColumn label="Quantity" value="quantity"/>
                    <ExcelColumn label="Unit" value="unit"/>
                    <ExcelColumn label="Unit Cost($)" value="amount"
                                 />
                 <ExcelColumn label="OverAll Cost($)" value="overall"
                                 /> 
                                   <ExcelColumn  label="Total" value="sum"/>
           
                </ExcelSheet>
             
           
            </ExcelFile>
           
          
        );
    }
}

const mapStateToProps = state => {
    return {
       summary:state.summary,
    };
};

const mapDispachToProps = dispatch => {
    return {
       
    };
};

export default connect(
    mapStateToProps,
    mapDispachToProps
)(Excel);