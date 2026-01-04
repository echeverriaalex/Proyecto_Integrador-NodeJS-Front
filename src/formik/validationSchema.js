import * as Yup from "yup";

/*
export const registerValidationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(100, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Required'),
});
*/

export const checkoutValidationSchema = Yup.object({
  name: Yup.string().required("Campo requerido"),
  cellphone: Yup.string().required("Campo requerido"),
  location: Yup.string().required("Campo requerido"),
  address: Yup.string().required("Campo requerido"),
});

export const registerValidationSchema = Yup.object({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(100, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Required'),
});

export const loginValidationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Required'),
});

export const contactValidationSchema = Yup.object({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(100, 'Too Long!')
        .required('Required'),
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(100, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    issue: Yup.string()
        .min(8, 'Issue must be at least 8 characters')
        .required('Required'),
});