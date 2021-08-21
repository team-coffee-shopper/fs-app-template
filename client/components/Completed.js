import React from 'react';
import { connect } from "react-redux";

const Completed = (props) => {
    const { auth } = props;

    console.log(auth)
    return(
        <div className="container">
            <div className="outer">
                <h1>Hey there, { auth.firstName } { auth.lastName }</h1>
                <h2> Thank you for your order,  </h2>
                The amount paid:

            </div>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        cart: state.cart,
    };
};

// const mapDispatchToProps = {
//     fetchCart: _fetchCart
// }

export default connect(mapStateToProps)(Completed);


