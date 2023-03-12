import ACTIONS from "./acttionTypes";

export const initialState = {
    count: 1,
    price: 200,
    constPrice: 200,
}

export default function reducer(state=initialState,action) {
    switch(action.type){
        case ACTIONS.INCREMENT: return {...initialState, count: state.count+1, price: state.price + state.constPrice }

        case ACTIONS.DECRIMENT: return {...initialState, count:  (state.count - 1) > 0 ? state.count - 1 : state.count, price: (state.count - 1) > 0 ? state.price - state.constPrice  : 200  }

        default: return initialState
    }
}
