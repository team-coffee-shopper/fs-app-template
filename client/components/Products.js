import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMerlotWines } from '../store/wines'

class Products extends Component {
    constructor() {
        super()
    }

    render() {
        const { merlotWines } = this.props;
        console.log(merlotWines)
        return (
            <div className="products-list">
                <h2> Product List </h2>

            </div>
        )
    }
}

const mapStateToProps = ({ merlotWines }) => {
    return {
        merlotWines
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMerlotWines: () => dispatch(fetchMerlotWines())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);