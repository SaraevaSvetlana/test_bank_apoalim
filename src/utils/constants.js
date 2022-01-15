import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    diners: Yup.string()
        .required("This field is Required")
        .min(1, 'Diners must be at least 1 characters')
        .max(2, 'Diners must not exceed 2 characters')

    ,
    mobile: Yup.string()
        .required("This field is Required")
        .matches(
            /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
            "Phone number is not valid"
        ),
});
