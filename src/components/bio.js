import React from "react"
import Image from "../components/image"

const Bio = () => {
  return (
    <div className={'bg-gray-100 flex items-center p-8'}>
      <div className={'w-24'}>
        <Image />
      </div>
      <div className={'flex-1 p-2'}>
        <h1 className={'font-sans text-2xl m-0'}>Omar Rida</h1>
        <p className={'font-sans text-sm text-gray-600 mb-0'}>Senior Engineer at RealBlocks</p>
        <p className={'font-sans text-sm mt-2 leading-snug mb-0'}>I’m a founder, programmer, and product designer living in New York City.</p>
      </div>
    </div>
  )
}

export default Bio
