import ACTIONS from "./actionTypes"

export const initialState = {
	count: 0, 
	data: [25,41,14,7,8]
}

export default function reducer(state = initialState, action={}) {
	switch (action.type) {
		case ACTIONS.INCREMENT: return { ...state, count: state.count + 1};
		case ACTIONS.DECRIMENT: return { ...state, count: state.count > 0 ? state.count - 1 : 0};
		case ACTIONS.ADDER: return { ...state, count: state.count + action.payload.addBy};
		case ACTIONS.RESET: return initialState;
		case ACTIONS.SORT_DATA: return sortArray(state);
		case ACTIONS.RANDOMIZER: return randomizer(state);
		default: return state;
	}
}

function sortArray(state) {
		const result = [...state.data].sort((a,b) => a - b);
		return {...state, data:result}
}

function randomizer(state) {
	const arr = [...state.data]
	for( let i = 0; i < state.count; i++ ) {
	 const random = Math.trunc(Math.random() * (400-100) + 100);
		arr.push(random)
	}
	return {...state, data:arr, count: 0};
}