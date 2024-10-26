import React from 'react'

export default function Loader() {
  return (
    <>
    <div className="flex gap-2 items-center justify-center m-auto">
      <div className="w-5 h-5 rounded-full animate-pulse bg-[#db3025]"></div>
      <div className="w-5 h-5 rounded-full animate-pulse bg-[#db3025]"></div>
      <div className="w-5 h-5 rounded-full animate-pulse bg-[#db3025]"></div>
    </div>
    </>
  )
}
