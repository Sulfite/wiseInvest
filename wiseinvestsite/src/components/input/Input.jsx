import { useState } from "react"

import { isNullOrEmpty } from "../../_assests/js/Ultils";

import './input.css';

const Input = ({error, label, ...rest}) => {
	const [touched, setTouched] = useState(false);
	
    return (
        <div className="formItem">
            { (!isNullOrEmpty(label)) ? <label htmlFor={rest.name}>{label}</label> : '' }
            <input className="form-control" {...rest} onBlur={() => setTouched(true)} />
            <span className="infoDanger">{touched && error}</span>
        </div>
    )
}

export default Input;