import { useState } from "react";

import { isNullOrEmpty } from "../../_assests/js/Ultils";

import "./input.css";

const Input = ({ error, label, ...rest }) => {
    const [touched, setTouched] = useState(false);

    const [isCheckbox, setisCheckbox] = useState(rest.type);

    return (
        <>
            {isCheckbox === "checkbox" ? (
                <div className='formItemCheckbox'>
                    <input
                        className='form-control-checkbox'
                        {...rest}
                        onBlur={() => setTouched(true)}
                    />
                    {!isNullOrEmpty(label) ? (
                        <label htmlFor={rest.name}>{label}</label>
                    ) : (
                        ""
                    )}
                    {/* <span className='infoDanger'>{touched && error}</span> */}
                </div>
            ) : (
                <div className='formItem'>
                    {!isNullOrEmpty(label) ? (
                        <label htmlFor={rest.name}>{label}</label>
                    ) : (
                        ""
                    )}
                    <input
                        className='form-control'
                        {...rest}
                        onBlur={() => setTouched(true)}
                    />
                    <span className='infoDanger'>{touched && error}</span>
                </div>
            )}

            {/* //     :
        //     (<div className="formItem">
        //         { (!isNullOrEmpty(label)) ? <label htmlFor={rest.name}>{label}</label> : '' }
        //         <input className="form-control" {...rest} onBlur={() => setTouched(true)} />
        //         <span className="infoDanger">{touched && error}</span>
        //     </div>) 
         */}
        </>

        // }
    );
};

export default Input;