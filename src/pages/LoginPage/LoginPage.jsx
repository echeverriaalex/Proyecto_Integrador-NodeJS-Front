import InputContainer from "../../components/UI/InputContainer/InputContainer"
import { Form, FormContainerStyled, HeaderStyled, LoginPageWrapper, RegisterWrapper } from "./LoginPageStyles";
import{ Formik } from "formik";
import { NavLink } from "react-router-dom";
import useRedirect from "../../hooks/useRedirect";
import { useDispatch } from "react-redux";
import { loginInitialValues } from "../../formik/initialValue";
import { loginValidationSchema } from "../../formik/validationSchema";
import { loginUser } from "../../axios/axios-users";
import { setCurrentUser } from "../../redux/users/userSlice";
import Button from "../../components/UI/Button/Button";
import { useState } from "react";

const LoginPage = () => {

    const dispatch = useDispatch();
    const [isFetching, setIsFetching] = useState(false);
    //useRedirect("/profile");
    //useRedirect("/mypurchases");
    useRedirect("/");

    return(
        <LoginPageWrapper>
            <FormContainerStyled>
                <HeaderStyled>
                    <h1>Sign In</h1>
                </HeaderStyled>
                <Formik
                    initialValues={ loginInitialValues }
                    validationSchema={ loginValidationSchema }
                    onSubmit={async (values) => {
                        setIsFetching(true);
                        const user = await loginUser(values.email, values.password)
                        console.log("Datos user: ", user);
                        dispatch(setCurrentUser({
                            ...user.user,
                            token: user.token
                        }))
                        setIsFetching(false);
                    }}
                >
                    <Form>
                        <InputContainer name="email" type="email" placeholder="Email" />
                        <InputContainer name="password" type="password" placeholder="Password" />
                        <Button type="submit" disabled={isFetching}> 
                            Login
                        </Button>
                    </Form>
                </Formik>
                <RegisterWrapper>
                    <NavLink to="/register">
                        <p>Don't have an account yet?</p>
                        <span>Sign up</span>
                    </NavLink>
                </RegisterWrapper>
            </FormContainerStyled>
        </LoginPageWrapper>
    );
}

export default LoginPage;