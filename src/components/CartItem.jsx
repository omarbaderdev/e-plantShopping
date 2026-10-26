import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from '../features/cart/CartSlice';
import Navbar from './Navbar';

function CartItem({ setPage }) {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalAmount = cart.reduce((sum, i) => sum + i.cost * i.quantity, 0);
  const totalPlants = cart.reduce((sum, i) => sum + i.quantity, 0);

  const handleIncrement = (item) =>
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name)); // quantity would hit 0
    }
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    alert('Coming Soon');
  };

  return (
    <div>
      <Navbar setPage={setPage} />
      <div className="cart-container">
        <h2 className="cart-total">Total Plants: {totalPlants}</h2>
        <h2 className="cart-total">Total Cost: ${totalAmount}</h2>

        {cart.length === 0 && <p className="cart-empty">Your cart is empty. Add a plant to get started.</p>}

        {cart.map((item) => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">Unit price: ${item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button" onClick={() => handleDecrement(item)} aria-label={`Decrease ${item.name}`}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button" onClick={() => handleIncrement(item)} aria-label={`Increase ${item.name}`}>+</button>
              </div>
              <div className="cart-item-total">Subtotal: ${item.cost * item.quantity}</div>
              <button className="cart-item-delete" onClick={() => dispatch(removeItem(item.name))}>Delete</button>
            </div>
          </div>
        ))}

        <div className="cart-actions">
          <button className="get-started-button" onClick={() => setPage('plants')}>Continue Shopping</button>
          <button className="get-started-button checkout" onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
