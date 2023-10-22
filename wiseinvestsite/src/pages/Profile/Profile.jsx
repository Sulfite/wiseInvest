import { BasicInformationForm } from "../../components/BasicInformationForm/BasicInformationForm";
import { FormAddres } from "./FormAddress/FormAddress";
import { FormPhone } from "./FormPhone/FormPhone";

import { Plan } from "./Plan/Plan";

import "./profile.css";

export const Profile = () => {
    return (
        <div className='container containerProfile'>
            <div className='infoBasic'>
                <BasicInformationForm
                    enabled={true}
                    logged={true}
                />
            </div>
            <div className='infoAddress'>
                <FormAddres />
            </div>
            <div className="infoPhone">
                <FormPhone />
            </div>
            <div className='infoPlan'>
                <Plan isLogged={true} />
            </div>
        </div>
    );
};
