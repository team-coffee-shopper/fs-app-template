import React, { useState } from "react";
import { connect } from "react-redux";
import { adjustQty, removeFromCart, } from "../store/cart";

const ItemInCart = ({ item, adjustQty, removeFromCart }) => {
    const [ input, setInput ] = useState(item.qty);
    // let setInput = useState(item.qty)

    const onChangeHandler = (evt) => {
        setInput(evt.target.value);
        adjustQty(item.id, evt.target.value);
    };

    return (
        <div>
            <img src={item.imageUrl} alt={item.title} />
            <div>
                <p>{item.title}</p>
                <p>{item.description}</p>
                <p>{item.price}</p>
                <p>Average customer rating: {item.averageRating}</p>
                <p>across {item.ratingCount} ratings</p>
                <a href={item.link}>Link</a>
                
            </div>
            <div>
                <div>
                    <label htmlFor="qty">Qty</label>
                    <input
                        min="1"
                        type="number"
                        id="qty"
                        name="qty"
                        value={input}
                        defaultValue="1"
                        onChange={onChangeHandler}
                    />
                </div>
                <button onClick={() => removeFromCart(item.id)} >
                    Remove
                </button>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        adjustQty: (id, value) => dispatch(adjustQty(id, value)),
        removeFromCart: (id) => dispatch(removeFromCart(id)),
    };
};

export default connect(null, mapDispatchToProps)(ItemInCart);
