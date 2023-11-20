import React from 'react'

const DefaultStyles = ({children}) => {
  return (
  <div className='default-Styles flex flex-col items-center max-w-[1200px] mx-auto my-0'>
    {children}
  </div>
  )
}

export default DefaultStyles