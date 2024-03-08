import { useSelector } from "react-redux";

import rootReducer from "../../redux/rootReducer";

import { BasicInformationForm } from "../../components/BasicInformationForm/BasicInformationForm";
import { FormAddres } from "./FormAddress/FormAddress";
import { FormPhone } from "./FormPhone/FormPhone";
import { Plan } from "./Plan/Plan";

import "./profile.css";
import { isLogged, isNullOrEmpty } from "../../_assests/js/Ultils";

export const Profile = () => {
    const { currentUser } = useSelector(
        (rootReducer) => rootReducer.userReducer
    );

    if (isNullOrEmpty(currentUser)) {
        isLogged(false);
    }

    isLogged(currentUser.authorized);

    return (
        <div className='container containerProfile'>
            <div className='infoBasic'>
                <BasicInformationForm
                    enabled={true}
                    logged={currentUser.authorized}
                />
            </div>
            <div className='infoAddress'>
                <FormAddres />
            </div>
            <div className="infoPhone">
                <FormPhone />
            </div>
            <div className='infoPlan'>
                <Plan isLogged={currentUser.authorized} />
            </div>
        </div>
    );
};
