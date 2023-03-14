import React, {useState} from 'react'

export default function useCalculate(initialState) {
	const [value, setvalue] = useState(initialState);
	const calculateOperation = {
		"+": (a,b) => Number(a) + Number(b),
		"-": (a,b) => Number(a) - Number(b),
		"*": (a,b) => Number(a) * Number(b),
		"/": (a,b) => (Number(a) / Number(b)).toFixed(1),
	}

	const plus = (a,b) => {
		const result = calculate["+"](a,b);
		setvalue(result)
	}
	const setAction = (actionname) =>{
		const { initialValue } = value
		const o = {
			...value,
			action: actionname,
			temp: initialValue,
			diplayValue: initialValue,
			initialValue: "",
		}

		setvalue(o)
	}

	const calculate = () => {
		const { temp:a, initialValue:b } =value
		const result = calculateOperation[value.action](a,b);
		setvalue({ ...value, action: "", initialValue: "", temp: "", diplayValue:result })
	}


	return [value, { plus, setvalue, setAction, calculate }]
}

