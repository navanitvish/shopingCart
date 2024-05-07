import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const AddInCart = () => {
    dispatch(add(post));
    toast.success("Item Added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.success("item Removed from Cart");
  };
  return (
    <div>
      <div>
        <p>{post.title}</p>
      </div>

      <div>
        <p>{post.description}</p>
      </div>

      <div>
        <img src={post.image} alt="" />
      </div>

      <div>
        <p>{post.price}</p>
      </div>

      {cart.some((p) => p.id == post.id) ? (
        <button onClick={removeFromCart}>Remove Item</button>
      ) : (
        <button onClick={AddInCart}>Add to cart</button>
      )}
    </div>
  );
};

export default Product;
