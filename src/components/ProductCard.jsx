import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const handleAdd = () => {

    if (!isLoggedIn) {
      // ❌ Not logged in → go to login
      navigate("/login");
      return;
    }

    // ✅ Logged in → add to cart
    dispatch(addToCart(product));
  };

  return (
    <div className="productCard">

      <img src={product.image} />

      <h4>{product.name}</h4>
      <p>₹{product.price}</p>

      <button onClick={handleAdd}>
        Add to Cart
      </button>

    </div>
  );
};

export default ProductCard;