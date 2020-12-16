import React from 'react'
import { useRouter } from 'next/router'
import Items from '@Components/Items'

const Product = () => {
  const {
    query: { product }
  } = useRouter()

  return (
    <>
      <Items product={product} />
    </>
  )
}

export default Product
