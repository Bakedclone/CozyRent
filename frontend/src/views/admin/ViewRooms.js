import React from 'react'
import CardViewRooms from 'components/Cards/CardViewRooms.js'

function ViewRooms() {
  return (
    <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardViewRooms />
        </div>
      </div>
  )
}

export default ViewRooms