import React from 'react'
import './Input.css'
export default function Input (props) {
	const typeInput = props.type ? props.type : 'text'
	return (
		<label>
			{props.label}
			<input id={props.id} className="Input" type={typeInput} value={props.value} onChange={props.change} />
		</label>
		
	)
}