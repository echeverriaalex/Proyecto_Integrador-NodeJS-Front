import { OrderContainerStyled, PurchasesContainerStyled, PurchasesWrapperStyled } from "./OrderCardsStyles";
import { shortenId } from "../../../utils/functions";
import { useNavigate } from "react-router-dom";

const OrderCards = (orders) => {

    const navigate = useNavigate();
    const ordersArray = orders?.orders || [];

    /*
    console.log("en orders cards ---> ", ordersArray);
    console.log("type  ---> ", typeof (ordersArray));
    console.log("length  ---> ", ordersArray.length);
    */

    return(
        <PurchasesWrapperStyled>
            <PurchasesContainerStyled>
                {
                    ordersArray?.map(order => (
                        <OrderContainerStyled
                            key={order._id} 
                            onClick={() => navigate(`/orderdetails/${order._id}`)}
                        >
                            <p>Date: {new Date(order.createdAt).toLocaleString()}</p>
                            <p>ID order: #{shortenId(order._id)}</p>
                            <p>Items: {order.items.length}</p>
                            <h3>$ { order.total?.toFixed(2) }</h3>
                        </OrderContainerStyled>
                    ))
                } 
            </PurchasesContainerStyled>
        </PurchasesWrapperStyled>
    )
};

export default OrderCards;