import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWines } from '../store/wines'

class Products extends Component {
    constructor() {
        super()
    }

    render() {
        const { wines } = this.props;
        console.log(wines)
        return (
            <div className="products-list">
                <h2> Wines List </h2>
                <div className="wines-outer">
                    {
                        wines.map(wine => {
                            return (
                                <div className="wine-card-inner" key= {wine.id}>
                                    <div className="img">
                                        <img src={wine.imageUrl}></img>
                                    </div>
                                    <div className="wine-title">
                                        <h3> { wine.title } </h3>
                                        <p> { wine.description } </p>
                                        <h4> { wine.price } </h4>
                                    </div>
  
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        )
    }
}

const mapStateToProps = ({ wines }) => {
    return {
        wines
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchWines: () => dispatch(fetchWines())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);