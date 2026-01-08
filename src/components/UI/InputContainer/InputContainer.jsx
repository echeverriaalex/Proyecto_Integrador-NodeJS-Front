import { ErrorMessage, Field } from "formik";
import { InputContainerStyled, InputStyled, ErrorMessageStyled } from "./InputContainerStyles";

const InputContainer = ({ children, type, placeholder, name, id }) => {
  return (
    <Field name={name}>
      {( { field, form: { errors, touched } } ) => (
        <InputContainerStyled>
          <h2>{ children }</h2>
          <InputStyled
            type={type}
            id= {id}
            placeholder={placeholder}
            {...field}
            isError={errors[field.name] && touched[field.name]}
          />

          <ErrorMessage name={field.name}>
            {(message) => <ErrorMessageStyled>{message}</ErrorMessageStyled>}
          </ErrorMessage>
        </InputContainerStyled>
      )}
    </Field>
  );
}

export default InputContainer;