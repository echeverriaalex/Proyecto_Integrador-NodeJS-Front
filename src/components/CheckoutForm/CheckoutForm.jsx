import { useDispatch, useSelector } from "react-redux";
import { CheckoutDatosStyled, Form, Formik } from "./CheckoutFormStyles";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../redux/cart/cartSlice";
import Loader from "../../components/Loader/Loader";
import { checkoutInitialValues } from "../../formik/initialValue";
import { checkoutValidationSchema } from "../../formik/validationSchema";
import InputContainer from "../UI/InputContainer/InputContainer";
import Button from "../UI/Button/Button";
import { createOrder } from "../../axios/axios-order";

const CheckoutForm = ({ cartItems, price, shippingCost }) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { currentUser } = useSelector(state => state.user)

  return (
    <CheckoutDatosStyled>
      <h2>Enter your data</h2>
      <Formik
        initialValues={checkoutInitialValues}
        validationSchema={checkoutValidationSchema}
        onSubmit={async (values) => {
          const orderData = {
            price,
            shippingCost,
            total: price + shippingCost,
            shippingDetails: { ...values },
            items: cartItems,
          }
          try {
            await createOrder(dispatch, orderData, currentUser)
            navigate('/successful')
            alert('Order created successfully')
            dispatch(clearCart())
          } catch (error) {
            alert('Error al crear la orden')
          }
        }}
      >
        {
          ({ isSubmitting }) => (
            <Form>
              <InputContainer name='name' htmlFor="nombre" type="text" id="nombre" placeholder="Name" />
              <InputContainer name='cellphone' htmlFor="celular" type="text" id="celular" placeholder="Phone number" />
              <InputContainer name='location' htmlFor="localidad" type="text" id="localidad" placeholder="Locality" />
              <InputContainer name='address' htmlFor="direccion" type="text" id="direccion" placeholder="Address" />
              <div>
                <Button disabled={!cartItems.length}>
                  {isSubmitting ? <Loader/> : 'Start Order'}
                </Button>
              </div>
            </Form>
          )
        }
      </Formik>
    </CheckoutDatosStyled>
  );
};

export default CheckoutForm;