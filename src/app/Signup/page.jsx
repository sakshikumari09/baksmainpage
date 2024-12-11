import React, { Suspense } from 'react'
import TokenCheck from './TokenCheck'
import LoadingLoader from '../Components/LoadingLoader'

function page() {
  return (
    <Suspense fallback={<LoadingLoader/>}>
        <TokenCheck/>
    </Suspense>
  )
}

export default page