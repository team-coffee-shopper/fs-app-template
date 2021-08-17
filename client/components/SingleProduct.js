import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSingleWine } from '../store/wines'

class SingleProduct extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        this.props.loadSingleWine(this.props.match.params.id)
    }
    render() {
        const { wine } = this.props
        console.log(wine)
        return(
            <div className="container single-product-outer">
                 <div className="single-product-inner">
                     <div className="row">
                        <div className="col-6">
                            <div className="img">
                                <img src={ wine.imageUrl } />
                                
                            </div>
                        </div>
                        <div className="col-6">
                            <h1> { wine.title } </h1> 
                        </div>
                     </div>
                   
                 </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        wine: state.wine
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadSingleWine: (id) => dispatch(fetchSingleWine(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);