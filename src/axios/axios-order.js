import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { createOrderFail, fetchOrderFail, fetchOrderStart, fetchOrderSuccess } from "../redux/orders/orderSlice";

const getAuthHeaders = (currentUser) => {
  const token = currentUser?.token;

  if (!token) {
    throw new Error("No auth token found in currentUser");
  }

  return {
    Authorization: token.startsWith("Bearer ") ? token : `Bearer ${token}`,
  };
};

export const getOrders = async (dispatch, currentUser) => {
  dispatch(fetchOrderStart());
  try {
    const orders = await axios.get(`${BASE_URL}/orders/mypurchases`, {
      headers: getAuthHeaders(currentUser),
    });
    
    if(orders){
      console.log("Orders ---> ", orders);
      
      console.log(orders.data.orders);
      dispatch(fetchOrderSuccess(orders.data.orders));
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
  try {
    const response = await axios.post(`${BASE_URL}/orders/create`, order, {
      headers: getAuthHeaders(currentUser),
    });

    if(response){      
      const orders = await getOrders(dispatch, currentUser)
      console.log("ordenes anteriores", orders);
      //dispatch(fetchOrderSucess(orders));
    }
  }catch(error) {
    console.log("Cerra la sesion y volve a loguearte");    
    console.log("Error creating order:", error);
    dispatch(createOrderFail())
  }
}