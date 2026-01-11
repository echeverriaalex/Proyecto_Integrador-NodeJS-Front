import { ErrorMessage, Field } from "formik";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { InputContainerStyled, InputStyled, ErrorMessageStyled, PasswordToggleButton } from "./InputContainerStyles";

const InputContainer = ({ children, type, placeholder, name, id }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isPasswordField = name === "password" && type === "password";

  return (
    <Field name={name}>
      {( { field, form: { errors, touched } } ) => (
        <InputContainerStyled>
          <h2>{ children }</h2>
          <div style={{ position: "relative" }}>
            <InputStyled
              type={isPasswordField && showPassword ? "text" : type}
              id={id}
              placeholder={placeholder}
              {...field}
              isError={errors[field.name] && touched[field.name]}
            />
            {isPasswordField && (
              <PasswordToggleButton
                type="button"
                onClick={togglePasswordVisibility}
                title={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </PasswordToggleButton>
            )}
          </div>

          <ErrorMessage name={field.name}>
            {(message) => <ErrorMessageStyled>{message}</ErrorMessageStyled>}
          </ErrorMessage>
        </InputContainerStyled>
      )}
    </Field>
  );
}

export default InputContainer;