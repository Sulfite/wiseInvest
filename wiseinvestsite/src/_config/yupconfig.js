import * as yup from "yup";

import { cnpjMask, cpfMask } from '../_assests/js/Ultils';

let patternTwoDigisAfterComma = /^\d+(\.\d{0,2})?$/;

export const FormValidations = yup.object().shape({
    nameUser: yup
        .string()
        .min(3, "Minimum 3 chars.")
        .required("Name is required."),

    emailUser: yup
        .string()
        .email("E-mail is invalid.")
        .required("E-mail is required."),

    passwordUser: yup
        .string()
        .min(8, "Minimum 8 chars.")
        .max(16, "Max 16 chars.")
        .required("Password is required."),

    confirmPasswordUser: yup
        .string()
        .oneOf([yup.ref("passwordUser"), null], "Password not match.")
        .required("Confirm password is required."),

    dtBirth: yup
        .date()
        .min(new Date(1900, 0, 1))
        .required("Date Birth is required."),

    nationalIdentifierUser: yup
        .string()
        // .test("len", "Invalid CPF/CNPJ No.", (val = "") => {
        //         if (val.length > 13) {
                    
        //             let x = val.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/);
        //             val = !x[2] ? x[1] : x[1] + '.' + x[2] + '.' + x[3] + '/' + x[4] + (x[5] ? '-' + x[5] : '');
        //             console.log(val, val.length);

        //             const val_length_without_dashes = val.length;
        //             return val_length_without_dashes === 18;
        //         } else { 
        //             let teste = val
        //             .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
        //             .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
        //             .replace(/(\d{3})(\d)/, '$1.$2')
        //             .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        //             .replace(/(-\d{2})\d+?$/, '$1');
        //             console.log(teste, teste.length);

        //             const val_length_without_dashes = teste.length;
        //             return val_length_without_dashes === 14;
        //         }
        //   })
        .min(14)
        .max(18)
        .required("CPF/CNPJ is required."),

    cdPostalUser: yup
        .string()
        .required("CEP is required.")
        .min(10, "CEP is invalid.")
        .max(10, "CEP is invalid."),

    streetUser: yup
        .string()
        .required("Address is required.")
        .min(3, "Minimum 3 chars."),

    districtUser: yup
        .string()
        .required("District is required.")
        .min(3, "Minimum 3 chars."),

    numberStreetUser: yup.string().required("Number Street is required."),

    complementUser: yup.string(),

    coutriesUser: yup.string().required("Country is required."),

    statesUser: yup.string().required("State is required."),

    citytUser: yup.string().required("City is required."),

    titleWallet: yup
        .string()
        .required("Title wallet is required.")
        .min(3, "Minimum 3 chars.")
        .max(15, "Max 30 chars"),

    stonk: yup
        .string()
        .min(4, "Minimum 4 chars.")
        .max(8, "Max 8 chars")
        .required("Stonk is required."),

    amount: yup
        .number()
        .positive()
        .test(
            "is-decimal",
            "The amount should be a decimal with maximum two digits after comma",
            (val) => {
                if (val !== undefined) {
                    return patternTwoDigisAfterComma.test(val);
                }
                return true;
            }
        )
        .min(0.1, "Minimum 0,1.")
        .required("Is required"),

    unitPrice: yup
        .number()
        .positive()
        .test(
            "is-decimal",
            "The amount should be a decimal with maximum two digits after comma",
            (val) => {
                if (val !== undefined) {
                    return patternTwoDigisAfterComma.test(val);
                }
                return true;
            }
        )
        .min(0.1, "Minimum 0,1.")
        .required("Is required"),

    totalValue: yup
        .number()
        .positive()
        .test(
            "is-decimal",
            "The amount should be a decimal with maximum two digits after comma",
            (val) => {
                if (val !== undefined) {
                    return patternTwoDigisAfterComma.test(val);
                }
                return true;
            }
        )
        .min(0.1, "Minimum 0,1.")
        .required("Is required"),
});
