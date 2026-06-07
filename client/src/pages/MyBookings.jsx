import React, { useEffect } from 'react'
import { dummyBookingData } from '../assets/assets'

const MyBookings = () => {
  const currency = import.meta.env.VITE_CURRENCY

  const [bookings, setBookings] = useState([])
  const [isLoding, setISLoading] = useState(true)

  const getMYBookings = async () => {
  setBookings(dummyBookingData)
  setISLoading(false)
}
 
useEffect(()=>{
  getMYBookings()
},[])
  
  return !isLoding ? (
    <div className='relative px-6 md:px-116 lg:px-40 pt-30 md:pt-40 min-h-[80vh]'>
      <BlurCircle top="100px" left="100px"/>
      <div>
         <BlurCircle bottom="0px" left="100px"/>
      </div>
      <h1 className='text-lg font-semibold mb-4'>My Bookings</h1>
    </div>
  ) : <Loading/ >
}

export default MyBookings
