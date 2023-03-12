import React from 'react'
import ACTIONS from './actionTypes'

export const initialState = {
                        count: 0,
                        data:[1,2,5,87,4]
                    }

export default function reducer(state = initialState ,action) {
 switch(action.type){
    case ACTIONS.INCREMENT: return {...initialState,count: state.count + 1}

    case ACTIONS.DECRIMENT: return {...initialState,count: state.count - 1 > 0 ? state.count -1 : 0}

    case ACTIONS.RESET: return initialState

    case ACTIONS.ADDER: return {...initialState,count: state.count + action.payload.addBy}

    case ACTIONS.SORTID: return {...initialState, data : initialState.data.sort((a,b)=>a-b)}

    case ACTIONS.RANDOMNUM: return rendomNum(state)

    default: return initialState
 }
}

function rendomNum(state){
    const arrResult = state.data
    for(let i = state.count; i>0; i--){
        const num = Math.round(Math.random()*150)
        arrResult.push(num)
    }
    return {...state,data:arrResult}
}