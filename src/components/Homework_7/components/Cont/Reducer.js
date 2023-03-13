import xndzor from "../img/Apple.png"
export const apple = {
	img: xndzor,
	name: "Apple",
	count: 1,
	price: 200,
	text: 0
}
export const reducer = (state, action) => {
	switch (action.type) {
		case "minus": return {
			...state, count: state.count - 1, text: state.price * state.count
		}
		case "pluse": return {
			...state, count: state.count + 1, text: state.price * state.count
		}

		default:
			return state;
	}
}