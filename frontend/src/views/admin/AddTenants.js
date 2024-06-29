import React from 'react'
import CardAddTenants from 'components/Cards/CardAddTenants.js'

function AddTenants() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardAddTenants />
        </div>
      </div>
    </>
  )
}

export default AddTenants