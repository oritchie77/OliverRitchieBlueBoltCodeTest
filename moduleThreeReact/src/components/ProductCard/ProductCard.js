import React from 'react'
import '../../App.scss'

const ProductCard = (props) => {

    return(
        <div className="card">
            <img src={props.product.images.edges[0].node['src']} className="product-image"
                 alt="bluebolt trainers "/>
                <div className="description-container">
                    <p className="brand">{props.product.vendor}</p>
                    <p className="description">{props.product.title}</p>
                    <p className="price">£{props.product.priceRange.minVariantPrice['amount']}</p>
                </div>
                <div className="buttons-container">
                    <button className="button blue">BUY</button>
                    <button className="button pink">MORE</button>
                </div>
        </div>
    )
}
export default ProductCard