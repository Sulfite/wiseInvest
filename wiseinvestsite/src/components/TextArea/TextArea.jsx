import { useState } from "react"

import { isNullOrEmpty } from "../../_assests/js/Ultils";

import './textArea.css';

const TextArea = ({error, label, ...rest}) => {
	const [touched, setTouched] = useState(false);

    return (
        <div className="formItem">
            { (!isNullOrEmpty(label)) ? <label htmlFor={rest.name}>{label}</label> : '' }
            <textarea className="form-control" {...rest} onBlur={() => setTouched(true)} />
            <span className="infoDanger">{touched && error}</span>
        </div>
    )
}

export default TextArea;