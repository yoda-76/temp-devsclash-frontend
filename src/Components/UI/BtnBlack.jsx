import React from 'react'

const BtnGreen = ({btnLabel,btnFont,onJoinRoomClick}) => {
  return (
    <button onClick={onJoinRoomClick} className={`py-2 px-10 font-poppins tracking-wide text-[12px]  border-2 rounded-md text-white`}>{btnLabel}</button>
  )

}

export default BtnGreen