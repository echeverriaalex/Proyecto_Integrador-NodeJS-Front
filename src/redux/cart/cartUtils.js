export const addItemToCart = (cartItems, product) => {
    const productInCart = cartItems.find(item => item.id === product.id);

    if(productInCart){
        // si el item ya estaba en el carro le suma una unidad mas
        return cartItems.map(item => 
            item.id === productInCart.id
                ? {...item, quantity: item.quantity + 1} 
                : item
        )
    }
    else{
        // si el item es nuevo en el carro lo agrego con una unidad
        return [...cartItems, {...product, quantity: 1}]
    }
}

export const removeItemFromCart = (cartItems, id) => {
    const productToRemove = cartItems.find(item => item.id === id);

    if(productToRemove.quantity > 1){
        return cartItems.map(item => 
            item.id === productToRemove.id ? 
            {...item, quantity: item.quantity - 1} 
            : item
        )
    }
    else{
        return cartItems.filter(item => item.id !== productToRemove.id)
    }
}

export const deleteItemCart = (cartItems, id) => {
    const productToDelete = cartItems.find(item => item.id === id);
    if(!productToDelete) return cartItems;

    // retorno los que no tienen el id que se quiere eliminar
    return cartItems.filter(item => item.id !== id)
}

export const resetShippingCost = (cartItems, shippingCost) => {
    if(cartItems.length === 1 && cartItems[0].quantity === 1){
        return 0;
    }
    return shippingCost;
}