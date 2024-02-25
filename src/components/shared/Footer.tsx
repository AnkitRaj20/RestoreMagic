import React from 'react'

const Footer = () => {
  const yearNow = new Date().getFullYear();
  return (
    <div className='flex justify-center pt-7 text-indigo-800 mb-8  text-center md:text-left md:mb-0'>© Copyright {yearNow} Ankit. All Rights Reserved.</div>
  )
}

export default Footer