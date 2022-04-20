import React, {useEffect, useState} from 'react'
import '../../App.scss'
import ProductCard from "../ProductCard/ProductCard";

const Main = (props) => {
    const productCardData = props.data.collectionByHandle.products.edges

    const [cardData, setCardData] = useState(productCardData)
    const [reverseClick, setReverseClick] = useState(0)

    const handelClick = () => {
        props.showCardsByNumber(9)
    }

    useEffect(() => {
        const reversCardData = cardData.reverse()
        setCardData(reversCardData)
    },[reverseClick])

    const reverseOrderHandleClick = () => {
        setReverseClick(reverseClick + 1)
    }

    return (
        <main>
            <div className="buttonGroup">
                <button onClick={reverseOrderHandleClick}>Reverse Product Order</button>
                <button>Price High to Low</button>
                <button>Price Low to High</button>
                <button onClick={handelClick}>Display 9 products</button>
            </div>
            <div className="ProductList">
                {cardData.map(product => (
                    <ProductCard
                        product={product.node}
                        key={product.node.id}
                    />
                ))}
            </div>
        </main>
    )
}

export default Main