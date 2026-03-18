import { useSelector, useDispatch } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeFromCart,
} from "../features/cart/cartSlice";

const Cart = () => {

  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // 🧮 Total Price
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="cartPage">

      {/* LEFT SIDE */}
      <div className="cartLeft">

        <h2>Shopping Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map(item => (
            <div key={item.id} className="cartItem">

              {/* IMAGE */}
              <img src={item.image} alt={item.name} />

              {/* DETAILS */}
              <div className="cartDetails">

                <h3>{item.name}</h3>

                <p className="stock">In stock</p>
                <p className="delivery">FREE delivery available</p>

                <div className="price">₹{item.price}</div>

                {/* ACTIONS */}
                <div className="cartActions">

                  {/* QTY */}
                  <div className="qtyBox">
                    <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
                  </div>

                  {/* DELETE */}
                  <button
                    className="deleteBtn"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    🗑 Delete
                  </button>

                </div>

              </div>

            </div>
          ))
        )}

        {/* SUBTOTAL BOTTOM */}
        {cart.length > 0 && (
          <div className="subtotalBottom">
            Subtotal ({cart.length} items): <b>₹{total}</b>
          </div>
        )}

      </div>

      {/* RIGHT SIDE */}
      {cart.length > 0 && (
        <div className="cartRight">

          <h3>Subtotal ({cart.length} items)</h3>
          <h2>₹{total}</h2>

          <button className="checkoutBtn">
            Proceed to Buy
          </button>

        </div>
      )}

    </div>
  );
};

export default Cart;