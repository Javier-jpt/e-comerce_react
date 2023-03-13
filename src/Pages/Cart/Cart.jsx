import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import Card from "../../Components/Card/Card";

function Cart () {

    const { cart } = useContext(CartContext)

    console.log(cart)

   return (
    <div className="Cart">
        {
            cart.map((product) => {
                const { id, title, images, price } = product;
                return (
                    <Card iscard={true} key={id} id={id} title={title} images={images} price={price} />
                )
            }) 
        }
    </div>
  )
}

export default Cart;