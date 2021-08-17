import React, { useState } from "react";
import { connect } from "react-redux";
import { adjustQty, removeFromCart, } from "../store/cart";

const ItemInCart = ({ cart,  adjustQty, removeFromCart }) => {
    //const [ input, setInput ] = useState(orderItem.qty);
    // let setInput = useState(orderItem.qty)

    const onChangeHandler = (evt) => {
        setInput(evt.target.value);
        adjustQty(orderItem.wine.id, evt.target.value);
    };
// orderItem,
    return (
        <ul>
            {
              cart.cart.map( orderItem =>(
                  <li>
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
                
                
                // <img src={orderItem.wine.imageUrl} alt={orderItem.wine.title} />
                // <div>
                //     <p>{orderItem.wine.title}</p>
                //     <p>{orderItem.wine.description}</p>
                //     <p>{orderItem.wine.price}</p>
                //     <p>Average customer rating: {orderItem.wine.averageRating}</p>
                //     <p>across {orderItem.wine.ratingCount} ratings</p>
                //     <a href={orderItem.wine.link}>Link</a>
                    
                // </div>
                // <div>
                //     <div>
                //         <label htmlFor="qty">Qty</label>
                //         <input
                //             min="0"
                //             type="number"
                //             id="qty"
                //             name="qty"
                //             value={input}
                //             defaultValue="1"
                //             onChange={onChangeHandler}
                //         />
                //     </div>
                //     <button onClick={() => removeFromCart(orderItem.wine.id)} >
                //         Remove
                //     </button>
                // </div> 
              ))
            }
        </ul>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        adjustQty: (id, value) => dispatch(adjustQty(id, value)),
        removeFromCart: (id) => dispatch(removeFromCart(id)),
    };
};

export default connect(null, mapDispatchToProps)(ItemInCart);
