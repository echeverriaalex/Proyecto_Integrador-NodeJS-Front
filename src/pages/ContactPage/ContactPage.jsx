import { ContactPageWrapper, Form, FormContainerStyled, HeaderStyled } from "./ContactPageStyles";
import Button from "../../components/UI/Button/Button";
import { Formik } from "formik";
import { contactInitialValues } from "../../formik/initialValue";
import { contactValidationSchema } from "../../formik/validationSchema";
import InputContainer from "../../components/UI/InputContainer/InputContainer";

const ContactPage = () => {
    return (
        <ContactPageWrapper>
            <FormContainerStyled>
                <HeaderStyled>
                    <h2>We will contact you</h2>
                </HeaderStyled>
                <Formik
                    initialValues={ contactInitialValues }
                    validationSchema={ contactValidationSchema }

                    /*
                    onSubmit={async (values) => {
                        const user = await loginUser(values.email, values.password)
                        dispatch(setCurrentUser({
                            ...user.usuario,
                            token: user.token
                        }))
                    }}
                    */
                >
                    <Form>
                        <InputContainer name="name" type="text" placeholder="Name" />
                        <InputContainer name="surname" type="text" placeholder="Surname" />
                        <InputContainer name="email" type="email" placeholder="Email" />
                        <InputContainer name="issue" type="text" placeholder="Issue" />
                        <Button> 
                            Send
                        </Button>
                    </Form>
                </Formik>
            </FormContainerStyled>
        </ContactPageWrapper>
    )
}

export default ContactPage;