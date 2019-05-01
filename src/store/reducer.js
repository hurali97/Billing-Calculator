const initialState={
    item:'',
    amount:0,
    summary_item:[],
    summary_amount:[],
    show:false,
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
        // newState.summary_item.push(newState.item);
        // newState.summary_amount.push(newState.amount);
        newState.summary.push({id:Math.random(),item:newState.item,amount:newState.amount})

        document.getElementById('item').value="";
        document.getElementById('amount').value="";
    }
    if(action.type==='summary'){
        newState.show=!newState.show;
    }

    return newState;
};

export default reducer;