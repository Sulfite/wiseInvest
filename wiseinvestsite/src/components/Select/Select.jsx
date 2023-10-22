import { useState } from "react"

import './select.css';
import { isNullOrEmpty } from "../../_assests/js/Ultils";

const Select = ({error, label, selectOptions,  ...rest}) => {
	const [touched, setTouched] = useState(false);

    if (selectOptions.length === 0 )
        return;

	return (
        <div className="formItem">
            { (label !== '') ? <label htmlFor={rest.name}>{label}</label> : '' }
            <select key={rest.name} className="form-control" {...rest}>
                <option>{ (isNullOrEmpty(label)) ? `Selecione ${rest.placeholder}` : `Selecione ${label}` }</option>
                {selectOptions.map((a) => ( 
                    <option value={a.id}>{a.description}</option>
                ))}
            </select>
            <span className="infoDanger">{touched && error}</span>
        </div>
	)
}

export default Select;