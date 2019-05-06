const initialState = {
    item: '',
    amount: 0,
    quantity: 0,
    unit: '',
    show: '',
    summary: [],
};

const reducer = (state = initialState, action) => {

    const newState = { ...state };

    if (action.type === 'item') {
        newState.item = action.value;

    }
    if (action.type === 'quantity') {
        newState.quantity = action.value;

    }
    if (action.type === 'unit') {
        newState.unit = action.value;

    }
    if (action.type === 'amount') {
        newState.amount = action.value;

    }
    if (action.type === 'add') {

        document.getElementById('item').value = "";
        document.getElementById('amount').value = "";
        document.getElementById('quantity').value = "";
        if (isNaN(newState.amount)||isNaN(newState.quantity)) {
            return {

                ...state,
                item: '',
                amount: 0,
                show: 'string',
                quantity:0,
            };
        }
        else {
            if (newState.item.length > 0 && newState.amount > 0&& newState.quantity > 0)
                return {

                    ...state,
                    summary: state.summary.concat({ id: Math.random(), item: state.item,quantity: state.quantity,
                        unit:state.unit, amount: state.amount }),
                    item: '',
                    amount: 0,
                    show: 'yes',
                    quantity:0,
                };
        }

        // && newState.summary.length <= 0

        if ((newState.item.length <= 0 || newState.amount <= 0|| newState.quantity <= 0))
            return {

                ...state,
                item: '',
                amount: 0,
                show: 'none',
                quantity:0,

            };

    }


    return newState;
};

export default reducer;