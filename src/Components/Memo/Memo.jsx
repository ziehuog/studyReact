import React from 'react'
import { useMemo, useState } from 'react'

function Memo() {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [products, setProducts] = useState([])


    const handleSubmit = () => {
        setProducts([... products, { 
            name: name, 
            price: +price
        }])
        setName('')
        setPrice('')

    }

    
    const total = useMemo(() => {
        const result = products.reduce((result, prod) => {
            return result + prod.price
        }, 0)
        return result
    }, [products])

  return (
    <div>
        <input 
            value={name} 
            onChange = { e => setName(e.target.value)}    
        />
        <br />
        <input 
            value={price} 
            onChange = { e => setPrice(e.target.value)}    
        />
        <br />
        <button onClick={handleSubmit}> Add </button>
        Total: {total}
        <ul>
            {products.map((product, index) => (
                <li key={index}> {product.name} : {product.price}</li>
            ))}
        </ul>
    </div>
  )
}

export default Memo