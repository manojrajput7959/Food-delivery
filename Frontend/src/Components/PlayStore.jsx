import React from 'react'
import { FRassets } from '../assets/frontend_assets/FRassets'

const PlayStore = () => {
  return (
    <div>
      <div className='text-center py-10' id='Footer-box'>
                      <h2 className='text-5xl'>For Better Experience Download <br /> Tomatop App  </h2>
                      <div className='flex align-center justify-center py-10'>
                          <img src={FRassets.play_store} alt="" />
                          <img src={FRassets.app_store} alt="" className='pl-10' />
                      </div>
                  </div>
    </div>
  )
}

export default PlayStore
