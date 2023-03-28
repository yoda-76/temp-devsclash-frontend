import React from "react";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import { useStateValue } from "../context/stateProvider";
const RoomPageQuestionDisplaySection = () => {
  const [{ questions, activeQuestion }, dispatch] = useStateValue();
  return (
    <div className="bg-primary_gray_light font-poppins w-[20rem] pt-[5rem] px-2 gap-4 flex text-[1rem] tracking-wide flex-col justify-start">
      <RemoveScrollBar />
      <div>{questions[activeQuestion]?.st}</div>
    </div>
  );
};

export default RoomPageQuestionDisplaySection;
