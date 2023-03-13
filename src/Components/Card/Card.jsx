import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

 function Card({id, title, images, price, iscard}) {

    const { cart, updateCart, removeCart} = useContext(CartContext)

    const handleBuy = () => {
      if (checkCart()) {
        const newCart = cart.filter((product) => product.id !== id)
        removeCart(newCart)
      } else {
        updateCart({id, title, images, price})
      }
    };

    const checkCart = () => {
        const exists = cart.find((product) => product.id === id)
        return exists;
    }

  return (
    <div className="Cards">
      <img className="img" src= {require(`../../../public/img/${images}`)} alt={title} />
      <p> {title} </p>
      <p> {price}€</p>
      {!checkCart() ? (
        <button onClick={handleBuy}> BUY </button>
      ) : (
        iscard ?
        <button onClick={handleBuy}> DELETE </button>
        : <p>Added to cart !</p>
      )}
    </div>
  )
};
export default Card;