import React from 'react'
import CardViewTenants from 'components/Cards/CardViewTenants.js'

function ViewTenants() {
  return (
    <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardViewTenants />
        </div>
      </div>
  )
}

export default ViewTenants