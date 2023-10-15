"use client"
import React from 'react'
import ProductPage from "@/components/Products/productPage/ProductPage"
import MayAlsoLike from '@/components/Products/MayAlsoLike/MayAlsoLike'
import Corousal from '@/components/Corousal/manualCorousal/Corousal'

const page = ({params}) => {
  return (
    <div>

      <ProductPage productSlug={params.product}/>
      <MayAlsoLike/>

    </div>
  )
}

export default page