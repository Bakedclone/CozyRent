import React from 'react'
import CardAvailableRooms from 'components/Cards/CardAvailableRooms.js'

function AvailableRooms() {
  return (
    <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardAvailableRooms />
        </div>
      </div>
  )
}

export default AvailableRooms