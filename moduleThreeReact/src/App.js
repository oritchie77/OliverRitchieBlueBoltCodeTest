import React, {useState} from 'react'
import './App.scss'
import { useQuery } from '@apollo/react-hooks'
import GET_PRODUCTS_IN_COLLECTION from './gql/getCollection'
import ProductCard from "./components/ProductCard/ProductCard";
import productCard from "./components/ProductCard/ProductCard";


const App = () =>  {

  const [cardCount, setCardCount] = useState(5)

  const {data, loading, error} = useQuery(GET_PRODUCTS_IN_COLLECTION, {
    variables: {
      count: cardCount,
      handle: 'skateboard'
    }
  })

  const showCardsByNumber = (numberOfCards) => {
    setCardCount(numberOfCards)
  }
  const handelClick = () => {
    showCardsByNumber(9)
  }
  // This will return a set of ten skateboards this should be renderted using the product card and grid type structure styling as you go.
  console.log(data)
  // explore the data and render your product list accordingly


  if(loading) {
    // Data is still loading....
    return (<div className="App">Loading....</div>)
  }

  let productCardData = data.collectionByHandle.products.edges
  let product = productCardData.map(product => (product.node.title))
  console.log(product)



  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        
        <div className="buttonGroup">
          <button >Reverse Product Order</button>
          <button>Price High to Low</button>
          <button>Price Low to High</button>
          <button onClick={handelClick}>Display 9 products</button>
        </div>

        <div className="ProductList">
            {productCardData.map(product => (
                <ProductCard
                    product={product.node}
                    key={product.node.id}
                />
            ))}
        </div>
      </main>
    </div>
  )
}

export default App
