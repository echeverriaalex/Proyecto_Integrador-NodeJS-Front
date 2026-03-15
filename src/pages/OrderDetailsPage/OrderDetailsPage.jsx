import { useParams } from "react-router-dom";
import { DataContainerStyled, DetailsSectionStyled, HrStyled, ItemContainerStyled, OrderContainerStyled, OrderDetailsContainerStyled, OrderDetailsPageWrapper, TextContainerStyled } from "./OrderDetailsPageStyles";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../axios/axios-order";
import OrderItemCard from "../../components/Orders/OrderItemCard/OrderItemCard";
import { shortenId } from "../../utils/functions";
import Loader from "../../components/Loader/Loader";

const OrderDetailsPage = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const { currentUser } = useSelector(state => state.user)
    const { orders } = useSelector(state => state.orders)
    const [visitedOrder, setVisitedOrder] = useState(null)

    const { typeProduct } = useSelector((state) => state.typeProductShow);

    console.log("Quedo el type product --> ", typeProduct);
    

    useEffect(() => {
        if(!orders){
            getOrders(dispatch, currentUser);
        }
        setVisitedOrder(orders?.find((order) => order._id === id))
    }, [id, currentUser, dispatch, orders]);

    return(
        <OrderDetailsPageWrapper>            
            {visitedOrder ? (
                <OrderContainerStyled>
                    <DataContainerStyled>
                        <DetailsSectionStyled>
                            <h2>Order #{ shortenId(id) }</h2>
                            <HrStyled />
                            <TextContainerStyled>
                                <p>Date: {new Date(visitedOrder?.createdAt)?.toLocaleString()}</p>
                                <p>Items: {visitedOrder?.items.length}</p>
                            </TextContainerStyled>
                        </DetailsSectionStyled>
                        <DetailsSectionStyled>
                            <h2>Destination</h2>
                            <HrStyled />
                            <TextContainerStyled>
                                <p>Name: {visitedOrder?.shippingDetails?.name}</p>
                                <p>Cellphone: {visitedOrder?.shippingDetails?.cellphone}</p>
                                <p>Location: {visitedOrder?.shippingDetails?.location}</p>
                                <p>Address: {visitedOrder?.shippingDetails?.address}</p>
                            </TextContainerStyled>
                        </DetailsSectionStyled>
                    </DataContainerStyled>
                    <OrderDetailsContainerStyled>
                        <ItemContainerStyled>
                            {
                                visitedOrder.items.map((item) => (
                                    <OrderItemCard key={item._id} item={item} />
                                ))
                            }
                        </ItemContainerStyled>
                        <DetailsSectionStyled>
                            <h2>Payment Details</h2>
                            <HrStyled />
                            <TextContainerStyled>
                                <p>Status: {visitedOrder.status}</p>
                                <p>Price: ${visitedOrder.price} </p>
                                <p>Shipping cost: ${visitedOrder.shippingCost} </p>
                                <HrStyled />
                                <p>Total: ${visitedOrder.total}</p>
                            </TextContainerStyled>
                        </DetailsSectionStyled>                
                    </OrderDetailsContainerStyled>
                </OrderContainerStyled>
            ) : (
                <Loader
                    message={`Loading order #${shortenId(id)} details`}
                />
            )}
        </OrderDetailsPageWrapper>
    );
}

export default OrderDetailsPage;