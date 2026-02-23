import { useSelector } from "react-redux";
import { ErrorPurchasesContainerStyled, OrderContainerStyled, PurchasesContainerStyled, PurchasesWrapperStyled } from "./OrderCardsStyles";
import { shortenId } from "../../../utils/functions";
import { useNavigate } from "react-router-dom";

const OrderCards = () => {

    const { orders, loading, error } = useSelector(state => state.orders)
    const navigate = useNavigate();

    /*
    if(loading && !orders){
        return <Loader styles={{ height: "50px", width: "50px" }}/>
    }
    */

   /*
    if(error) {
        return <h2 style={{textAlign: 'center'}}>{error}</h2>
    }
        */

    return(
        <PurchasesWrapperStyled>
            {
                orders?.length ? (
                    <PurchasesContainerStyled>
                        {
                            orders.map(order => (
                                <OrderContainerStyled
                                    key={order._id} 
                                    onClick={() => navigate(`/orderdetails/${order._id}`)}
                                >
                                    <h2>ID order: #{shortenId(order._id)}</h2>
                                    <h3>${order.price}</h3>
                                    <p>Date: {new Date(order.createdAt).toLocaleString()}</p>
                                </OrderContainerStyled>
                            ))
                        } 
                    </PurchasesContainerStyled>
                ) : (
                    <ErrorPurchasesContainerStyled>
                        <h2 style={{textAlign: 'center'}}>No orders found. {error} </h2>
                    </ErrorPurchasesContainerStyled>
                )
            }
        </PurchasesWrapperStyled>
    )
};

export default OrderCards;