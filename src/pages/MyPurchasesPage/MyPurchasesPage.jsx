import { useEffect } from "react";
import { getOrders } from "../../axios/axios-order";
import { ErrorPurchasesContainerStyled, MyPurchasesPageWrapper } from "./MyPurchasesPageStyles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import OrderCards from "../../components/Orders/OrderCards/OrderCards";
import { clearError, fetchOrderFail } from "../../redux/orders/orderSlice";

const MyPurchasesPage = () => {

    const navigate = useNavigate();    
    const dispatch = useDispatch();    
    const { orders, error } = useSelector(state => state.orders)
    const { currentUser } = useSelector(state => state.user)

    console.log("my purcheses orders --> ", orders);
    

    useEffect(() => {
        if(!currentUser?.token){
            dispatch(fetchOrderFail('No token to fetch orders in My_Purchases, please log in again.'))
            return;
        }
        
        if(!orders){
            getOrders(dispatch, currentUser)
        }
    }, [dispatch, currentUser, orders])
    
    return (
        <MyPurchasesPageWrapper>            
            <h2>My Purchases</h2>
            
            {
            orders && orders.length > 0 ? (
                <OrderCards 
                    orders={orders}
                    error={error}
                />
            ) : (
                <ErrorPurchasesContainerStyled>
                    <h2 style={{textAlign: 'center'}}>No orders found. {error} </h2>
                </ErrorPurchasesContainerStyled>
            )}

        </MyPurchasesPageWrapper>
    );
}

export default MyPurchasesPage;