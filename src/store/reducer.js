const initialState={
    item:'',
    amount:0,
    summary_item:[],
    summary_amount:[],
    show:'',
    summary:[],
};

const reducer=(state = initialState , action)=>{

    const newState = { ...state };

    if(action.type==='item'){
        newState.item=action.value;
     
    }

    if(action.type==='amount'){
        newState.amount=action.value;
      
    }
    if(action.type==='add'){
 
        document.getElementById('item').value="";
        document.getElementById('amount').value="";
        if(isNaN(newState.amount)){
            return {
          
                ...state,
                item:'',
                amount:0,
                show:'string'
              
              };
        }
        else{
        if(newState.item.length>0&&newState.amount>0)
        return {
        
            ...state,
            summary: state.summary.concat({ id: Math.random(), item: state.item , amount:state.amount }),
            item:'',
            amount:0,
            show:'yes'
          
          };
        }
        
          if((newState.item.length<=0||newState.amount<=0)&&newState.summary.length<=0)
          return {
          
              ...state,
              item:'',
              amount:0,
              show:'none'
            
            };

    }
  

    return newState;
};

export default reducer;