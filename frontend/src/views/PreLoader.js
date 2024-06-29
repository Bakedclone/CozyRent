import React from 'react'
import {BeatLoader} from 'react-spinners';

function PreLoader() {
  return (
    <div className='Preloader flex justify-center'>
        <BeatLoader color="#2563eb" size={20} className='PreloaderChild'/>
    </div>
  )
}

export default PreLoader