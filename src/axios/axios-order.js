import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { createOrderFail, fetchOrderFail, fetchOrderStart, fetchOrderSuccess } from "../redux/orders/orderSlice";

export const getOrders = async (dispatch, currentUser) => {
  dispatch(fetchOrderStart());
  try {
    const orders = await axios.get(`${BASE_URL}/orders`, {
      headers: {
        "x-token": currentUser.token,
      },
    });
    
    if(orders){
      console.log(orders.data.data);
      dispatch(fetchOrderSuccess(orders.data.data));
    }
  } catch (error) {
    console.log(error);
    dispatch(
      fetchOrderFail(
        "Error fetching orders, please try again later. Try with a different user."
      )
    );
  }
};

export const createOrder = async (dispatch, order, currentUser) => {
  console.log("En crear orden", order);
  
  try {
    const response = await axios.post(`${BASE_URL}/orders`, order, {
      headers: {
        "x-token": currentUser.token,
      },
    });
    if(response){
      console.log("Respuesta de crear orden:", response);      
      console.log("Orden creada:", response.data);
      const orders = await getOrders(dispatch, currentUser)
      console.log("ordenes anteriores", orders);
      //dispatch(fetchOrderSucess(orders));
    }
  } catch (error) {
    console.log("Cerra la sesion y volve a loguearte");    
    console.log("Error creating order:", error);
    dispatch(createOrderFail())
  }
}

