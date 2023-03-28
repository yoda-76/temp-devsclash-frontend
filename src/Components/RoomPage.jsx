import React from 'react'
import RoomPageQuestionSection from './RoomPageQuestionSection'
import RoomPageQuestionDisplaySection from './RoomPageQuestionDisplaySection'
import RoomPageEditorSection from './RoomPageEditorSection'
import LeaderBoardComponent from './LeaderBoardComponent'
import WaitingRoomModal from './WaitingRoomModal'
import { useState } from 'react'
const RoomPage = () => {
  const [waitingRoomRequest, setWaitingRoomRequest] = useState(true);

  return (
    <div className='flex w-full min-h-screen h-[100vh] bg-primary_gray text-primary_green '>
       {
        <WaitingRoomModal
        openWaitingRoomModal={waitingRoomRequest}
        onCloseWaitingRoomModal={() => {
            setWaitingRoomRequest(!waitingRoomRequest);
          }}
        />
      }
     <RoomPageQuestionSection/>
     <RoomPageQuestionDisplaySection/>
     <RoomPageEditorSection/>
     <LeaderBoardComponent/>
    </div>
  )
}

export default RoomPage