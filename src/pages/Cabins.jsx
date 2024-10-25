// import React, { useEffect } from 'react'
// import { getCabins } from '../services/apiCabins'

import CabinTable from "../features/cabin/CabinTable";

export default function Cabin() {
  // useEffect(function() {
  //   getCabins().then((data)=> console.log(data) )
  // },[])
  return (
    <div>
      <CabinTable/>

    </div>
  )
}
