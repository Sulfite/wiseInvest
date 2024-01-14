import { BasicInformationForm } from "../../components/BasicInformationForm/BasicInformationForm";

import "./Register.css";

export const Register = () => {
    return (
        <div className='container containerFormRegister'>
            <div className='FormRegister'>
                <h1>WiseInvest</h1>
                <BasicInformationForm enabled={false} logged={false} />
            </div>
        </div>
    );
};
