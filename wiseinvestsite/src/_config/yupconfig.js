import * as yup from 'yup';

export const FormValidations = yup.object().shape({
	
    nameUser: yup
        .string()
        .min(3, 'Minimum 3 chars.')
        .required('Name is required.'),

    emailUser: yup
        .string()
        .email('E-mail is invalid.')
        .required('E-mail is required.'),

    passwordUser: yup
        .string()
        .min(8, 'Minimum 8 chars.')
        .max(16, 'Max 16 chars.')
        .required('Password is required.'),

    confirmPasswordUser: yup
        .string()
        .oneOf([yup.ref('passwordUser'), null],'Password not match.')
        .required('Confirm password is required.'),

    dtBirth: yup
        .date()
        .min(new Date(1900, 0, 1))
        .required('Date Birth is required.'),

    nationalIdentifierUser: yup
        .string()
        .min(14)
        .max(18)
        .required('CPF/CNPJ is required.'),

    cdPostalUser: yup
        .string()
        .required('CEP is required.')
        .min(10, 'CEP is invalid.')
        .max(10, 'CEP is invalid.'),

    streetUser: yup
        .string()
        .required('Address is required.')
        .min(3, 'Minimum 3 chars.'),

    districtUser: yup
        .string()
        .required('District is required.')
        .min(3, 'Minimum 3 chars.'),

    numberStreetUser: yup
        .string()
        .required('Number Street is required.'),

    complementUser: yup
        .string(),

    coutriesUser: yup
        .string()
        .required('Country is required.'),

    statesUser: yup
        .string()
        .required('State is required.'),

    citytUser: yup
        .string()
        .required('City is required.'),
    titleWallet: yup
        .string()
        .required('Title wallet is required.')
        .min(3, 'Minimum 3 chars.')
        .max(15, 'Max 30 chars'),
})
