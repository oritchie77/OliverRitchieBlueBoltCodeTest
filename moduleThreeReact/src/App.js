import React, {useState} from 'react'
import './App.scss'
import { useQuery } from '@apollo/react-hooks'
import GET_PRODUCTS_IN_COLLECTION from './gql/getCollection'
import Main from "./components/ProductList/Main";

const App = () =>  {

  const [cardCount, setCardCount] = useState(5)

  const showCardsByNumber = (numberOfCards) => {
    setCardCount(numberOfCards)
  }

  const {data, loading, error} = useQuery(GET_PRODUCTS_IN_COLLECTION, {
    variables: {
      count: cardCount,
      handle: 'skateboard'
    }
  })

  // This will return a set of ten skateboards this should be renderted using the product card and grid type structure styling as you go.
  console.log(data)
  // explore the data and render your product list accordingly


  if(loading) {
    // Data is still loading....
    return (<div className="App">Loading....</div>)
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
        <Main
            data={data}
            showCardsByNumber={showCardsByNumber}
        />
    </div>
  )
}

export default App
