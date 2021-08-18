import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { adjustQty, removeFromCart, _fetchCart } from "../store/cart";

const ItemInCart = (props) => {
  const { cart,  adjustQty, removeFromCart} = props
    //const [ input, setInput ] = useState(orderItem.qty);
    // let setInput = useState(orderItem.qty)

    useEffect(() => {
      if (props.cart) props.fetchCart(props.auth.id) 
      //console.log('PROPS.AUTH.ID', props.auth.id)
    }, [props.cart])

    const onChangeHandler = (evt) => {
        setInput(evt.target.value);
        adjustQty(orderItem.wine.id, evt.target.value);
    };


    //onsole.log('CARTTT @ ItemCART', cart.cart)
    
   
    return (
        <ul>
            {
              cart.cart.length === 0 ?
              <h1>nooooo</h1> :
              cart.cart.map( orderItem =>(
                  <li key={ orderItem.id }>
                    <img src={orderItem.wine.imageUrl} alt={orderItem.wine.title} />
                    <div>
                      <p>{orderItem.wine.title}</p>
                      <p>{orderItem.wine.description}</p>
                      <p>{orderItem.wine.price}</p>
                      <p>Average customer rating: {orderItem.wine.averageRating}</p>
                      <p>across {orderItem.wine.ratingCount} ratings</p>
                      <a href={orderItem.wine.link}>Link</a>
                    </div>
                    <div>
                      <div>
                         <label htmlFor="qty">Qty</label>
                         <input
                             min="0"
                             type="number"
                             id="qty"
                             name="qty"
                             //value={input}
                             defaultValue="1"
                            onChange={onChangeHandler}
                         />
                      </div>
                    <button onClick={() => removeFromCart(orderItem.wine.id)} >
                         Remove
                     </button>
                   </div> 
                  </li>
              ))
            }
        </ul>
    );
};
const mapState = (state) =>{
  return {
    cart: state.cart,
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        adjustQty: (id, value) => dispatch(adjustQty(id, value)),
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        fetchCart: _fetchCart
    };
};

export default connect(mapState, mapDispatchToProps)(ItemInCart);
