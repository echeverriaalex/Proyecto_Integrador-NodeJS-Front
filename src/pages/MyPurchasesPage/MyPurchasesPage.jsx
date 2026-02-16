import { useEffect } from "react";
import { getOrders } from "../../axios/axios-order";
import { MyPurchasesPageWrapper } from "./MyPurchasesPageStyles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import OrderCards from "../../components/Orders/OrderCards/OrderCards";
import { clearError, fetchOrderFail } from "../../redux/orders/orderSlice";

const MyPurchasesPage = () => {

    const navigate = useNavigate();    
    const dispatch = useDispatch();    
    const { orders, error } = useSelector(state => state.orders)
    const { currentUser } = useSelector(state => state.user)

    useEffect(() => {
        if(!currentUser?.token){
            dispatch(fetchOrderFail('no hay token'))
            return;
        }
        
        if(!orders){
            getOrders(dispatch, currentUser)
        }
    }, [dispatch, currentUser, orders])
    
    return (
        <MyPurchasesPageWrapper>            
            <h2>My Purchases</h2>
            <OrderCards />
        </MyPurchasesPageWrapper>
    );
}

export default MyPurchasesPage;