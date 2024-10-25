import React, { useEffect } from 'react'
import { getCabins } from '../services/apiCabins'

export default function Cabin() {
  useEffect(function() {
    getCabins().then((data)=> console.log(data) )
  },[])
  return (
    <div>
      Cabin
    </div>
  )
}
