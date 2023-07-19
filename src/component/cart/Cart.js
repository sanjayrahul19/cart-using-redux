import React from "react";
import { useSelector } from "react-redux";
import { decrementQuantity, selectedItems } from "../../slices/cartSlice";
import "./Cart.css"
import { useDispatch } from "react-redux";
import { removeItems,incrementQuantity } from "../../slices/cartSlice";

const Cart = () => {
  const items = useSelector(selectedItems);
  const dispatch=useDispatch()

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleDelete = (id) => {
    dispatch(removeItems(id))
  }

  const incrementCartItem=(item)=>{
    dispatch(incrementQuantity(item))
  }

  const decrementCartItem=(item)=>{
    dispatch(decrementQuantity(item))
  }

  return (
    <div className="cart-container">
      {items.length === 0 ? (
       <div className="empty-cart-message">
       <span role="img" aria-label="Sad Face">😔</span> Your cart is empty.
     </div>
      ) : (
        <>
          {items.map((item,id) => {
            return (
              <div className="cart-item" key={item.id}>
                <img className="item-image" src={item.image} alt="" />
                <div className="item-details">
                  <h1 className="item-name">{item.name}</h1>
                  <h2 className="item-price">{item.price}</h2>
                  <div className="quantity-control">
                    <button className="increment-button" onClick={()=>incrementCartItem(item)}>+</button>
                    <span className="item-quantity">{item.quantity}</span>
                    <button className="decrement-button" onClick={()=>decrementCartItem(item)}>-</button>
                    <button className="remove-button" onClick={()=>handleDelete(item.id)}>Remove Item</button>
                    <h2>Total:{item.price * item.quantity}</h2>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="cart-total">
            <h2>Total:</h2>
            <h2>{getTotalPrice().toFixed(2)}</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
