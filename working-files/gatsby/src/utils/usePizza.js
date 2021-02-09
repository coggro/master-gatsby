import { useContext, useState } from 'react'
import OrderContext from '../components/OrderContext'

export default function usePizza({ pizzas, inputs }) {
  // Create some state to hold our order
  // Moved state up to provider
  // const [order, setOrder] = useState([])
  // Now access state and updater via context
  const [order, setOrder] = useContext(OrderContext)
  // Make a fx to add things to order
  function addToOrder(orderedPizza) {
    setOrder([...order, orderedPizza])
  }
  // Make a fx to remove things from order
  function removeFromOrder(index) {
    setOrder([
      // everything before
      ...order.slice(0, index),
      // everything after
      ...order.slice(index + 1),
    ])
  }
  // Send this data to a serverless fx when they check out
  // TODO
  return {
    order,
    addToOrder,
    removeFromOrder,
  }
}
