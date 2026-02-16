export const formatUserName = (name) => {
    if (!name) return
    name = name.trim().split(" ");
    return name[0].charAt(0).toUpperCase() + name[0].slice(1).toLowerCase();
};

//para calcular el total del carrito
export const totalPrice = (cartItems) => {
  return cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity)
  }, 0)
}

export const shortenId = (id) => {
  return id.slice(0, 7);
}

export const capitalizeText = (text) => {
    if (!text) return
    text = text.trim().split(" ");
    return text[0].charAt(0).toUpperCase() + text[0].slice(1).toLowerCase();
};