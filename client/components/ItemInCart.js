import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { adjustQty, _removeFromCart, _fetchCart } from "../store/cart";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan } from '@fortawesome/free-solid-svg-icons'


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
   
    return (
        <div className="itemInner">
            {
              cart.cart.length === 0 ?
              <h1>nooooo</h1> :
              cart.cart.map( orderItem =>(
                  <div key={ orderItem.id }>
                    <div className="col-md-6 text-left">
                      <div className="col-md-6">
                        <img src={orderItem.wine.imageUrl} alt={orderItem.wine.title} />
                      </div>
                      <div className="col-md-6 title">
                        {orderItem.wine.title}
                      </div>
                      
                    </div>
                    <div className="col-md-3 text-center">
                      <p>{orderItem.wine.price}</p>
                    </div>
                    <div className="col-md-3 text-right">
                       <button onClick={() => removeFromCart(orderItem.id)}> <FontAwesomeIcon icon={ faBan } />  </button>
                    </div>    
                    <div>
                   </div> 
                  </div>
                
                  
              ))
            }
        </div>
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
        removeFromCart: (id) => dispatch(_removeFromCart(id)),
        fetchCart: _fetchCart
    };
};

export default connect(mapState, mapDispatchToProps)(ItemInCart);
